import styles from './loading.module.css';

export default function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.spinner}>
                <div className={styles.bounce1}></div>
                <div className={styles.bounce2}></div>
                <div className={styles.bounce3}></div>
            </div>
            <h3 className={styles.loadingTitle}>Carregando conteúdo...</h3>
            <p className={styles.loadingSubtitle}>Preparando tudo para você</p>
        </div>
    )
}