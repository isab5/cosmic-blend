"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import styles from "./[id].module.css";
import Image from "next/image";
import Link from "next/link";
import { LeftOutlined } from "@ant-design/icons";

export default function ProductDetails() {
    const params = useParams();
    const [id, setId] = useState(null);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (!params?.id) return;
        setId(params.id);
    }, [params?.id]);

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                setProduct(null);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Loading or not found.</p>;
    }

    return (
        <div className={styles.page}>
            <div className={styles.productDetailsContainer}>
                <Link href="/products" className={styles.iconBackButton} aria-label="Voltar para Produtos">
                    <LeftOutlined style={{ fontSize: "22px" }} />
                </Link>
                <Image
                    className={styles.cover}
                    src={product.thumbnail || "/img/placeholder.jpg"}
                    alt={product.title}
                    width={200}
                    height={200}
                />
                <div className={styles.infoBlock}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <div className={styles.details}>
                        <p><strong>Description:</strong> {product.description}</p>
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p><strong>Stock:</strong> {product.stock}</p>
                        <p><strong>Discount:</strong> {product.discountPercentage}%</p>
                        <p><strong>Rating:</strong> {product.rating ? (
                            <span className={styles.rating}>
                                {"★".repeat(Math.round(product.rating))}
                                {"☆".repeat(5 - Math.round(product.rating))}
                                {" "}({product.rating})
                            </span>
                        ) : "Sem avaliação"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}