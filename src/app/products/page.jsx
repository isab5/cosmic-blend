"use client";
import { useEffect, useState } from "react";
import styles from "./products.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Pagination, Skeleton, Input } from "antd";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "components/ProductCard/ProductCard";
import SearchButton from "components/SearchButton/SearchButton";

const PAGE_SIZE = 30;

export default function Products() {
    const [products, setProducts] = useState([]);
    const [current, setCurrent] = useState(1);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const router = useRouter();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://dummyjson.com/products?limit=200&sortBy=title&order=asc');
                setProducts(response.data.products);
            } catch (error) {
                toast.error("Failed to fetch products");
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const startIndex = (current - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);


    const handleProductClick = async (product) => {
        setTimeout(async () => {
            try {
                await router.push(`/products/${product.id}`);
                toast.success(`You are viewing: ${product.title}`);
            } catch (error) {
                toast.error("Erro ao navegar para o produto. Tente novamente.");
            }
        }, 700);
    };

    const handleSearch = (valor) => {
        setSearchTerm(valor);
        setCurrent(1);
    };

    return (
        <div>
            <div style={{ maxWidth: 400, margin: "2rem auto" }}>
                <SearchButton onSearch={handleSearch} />
            </div>
            <div className={styles.productList}>
                {loading
                    ? Array.from({ length: PAGE_SIZE }).map((_, i) => (
                        <div key={i} className={styles.skeletonCard}>
                            <Skeleton.Image style={{ width: 200, height: 200, marginBottom: 16 }} active />
                            <Skeleton active paragraph={{ rows: 3 }} title={{ width: '80%' }} />
                        </div>
                    ))
                    : paginatedProducts.map(product => (
                        <div
                            key={product.id}
                            style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
                        >
                            <ProductCard
                                product={product}
                                onView={() => handleProductClick(product)}
                            />
                        </div>
                    ))
                }
            </div>
            <Pagination
                current={current}
                onChange={page => setCurrent(page)}
                total={filteredProducts.length}
                pageSize={PAGE_SIZE}
                showSizeChanger={false}
                style={{ margin: "2rem auto", textAlign: "center", justifyContent: "center", display: "flex" }}
                disabled={loading}
            />
        </div>
    );
}