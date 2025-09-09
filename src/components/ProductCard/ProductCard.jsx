import styles from "./ProductCard.module.css";

export default function ProductCard({product, onClick }) {
    return (
        <div className={styles.card} onClick={onClick}>
            <img src={product.thumbnail} className={styles.avatar} alt={product.title} />
            <h3 className={styles.title}>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.gender}</p>
        </div>
    );
}