import styles from "./ProductCard.module.css";
import Image from "next/image"

export default function ProductCard({product, onClick }) {
    return (
        <div className={styles.card} onClick={onClick}>
            <Image src={product.thumbnail} className={styles.avatar} alt={product.title} width={200} height={200} />
            <h3 className={styles.title}>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
        </div>
    );
}
