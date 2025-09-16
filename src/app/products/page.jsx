"use client";
import { useEffect, useState } from "react";
import styles from "./products.module.css";
import axios from "axios";
import { useRouter } from "next/navigation"; 
import { Pagination, Skeleton } from "antd";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "../../components/ProductCard/ProductCard";

const PAGE_SIZE = 30;

export default function Products() {
    const [products, setProducts] = useState([]);
    const [current, setCurrent] = useState(1);
    const [loading, setLoading] = useState(true);

    const router = useRouter(); // <-- Aqui instancia

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

    const startIndex = (current - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const paginatedProducts = products.slice(startIndex, endIndex);

    // Função de clique customizada
    const handleProductClick = (product) => {
        toast.success(`Você está visualizando: ${product.title}`);
        setTimeout(() => {
            router.push(`/products/${product.id}`);
        }, 700); // tempo suficiente para o toast aparecer
    };

    return (
        <div>
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
                            onClick={() => handleProductClick(product)}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))
                }
            </div>
            <Pagination
                current={current}
                onChange={page => setCurrent(page)}
                total={products.length}
                pageSize={PAGE_SIZE}
                showSizeChanger={false}
                style={{ margin: "2rem auto", textAlign: "center" }}
                disabled={loading}
            />
            {/* O ToastContainer deve estar global (em layout.js) para pegar navegação */}
        </div>
    );
}