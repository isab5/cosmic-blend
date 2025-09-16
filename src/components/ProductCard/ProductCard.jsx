import styles from "./ProductCard.module.css";
import Image from "next/image";

function renderStars(rating) {
    if (typeof rating !== "number") return "Sem avaliação";
    const rounded = Math.round(rating);
    const stars = "★".repeat(rounded) + "☆".repeat(5 - rounded);
    return stars + ` (${rating})`;
}

export default function ProductCard({ product, onClick }) {
    return (
        <div className={styles.card} onClick={onClick}>
            <Image
                src={product.thumbnail || "/placeholder.jpg"}
                className={styles.avatar}
                alt={product.title || "Produto sem título"}
                width={200}
                height={200}
                loading="lazy"
            />
            <h3 className={styles.title}>{product.title || "Sem título"}</h3>
            <p className={styles.description}>{product.description || "Sem descrição"}</p>
            <p className={styles.category}>{product.category || "Sem categoria"}</p>
            <p className={styles.price}>{typeof product.price === "number" ? `US$ ${product.price}` : "Sem preço"}</p>
            <p className={styles.rating}>{renderStars(product.rating)}</p>
        </div>
    );
}