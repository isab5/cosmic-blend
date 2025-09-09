"use client";
import { useEffect, useState } from "react";
import styles from "./products.module.css";
import axios from "axios";
import {
    Pagination,
    Skeleton,
    Spin,
} from "antd";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Products() {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);

    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products?limit=200&sortBy=title&order=asc');
                setProducts(response.data.products);
            } catch (error) {
                toast.error("Failed to fetch products");
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <div className={styles.productList}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onClick={() => console.log(product.id)} />
                ))}
            </div>
                <Pagination
                    showSizeChanger
                    onShowSizeChange={onShowSizeChange}
                    defaultCurrent={3}
                    total={200}
                />
        </div>
    );
}
