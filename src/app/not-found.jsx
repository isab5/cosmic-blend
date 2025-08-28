import Link from "next/link";
import Image from "next/image";
import styles from "./notFound.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Image src="/img/notFound.png" alt="Not Found" width={300} height={300}  />
                <h1> Página não encontrada!</h1>
                <p>A página que você procura não existe ou está indisponível por tempo indeterminado.</p>
                <div>
                    <Link href="/home">
                        <button className={styles.button}>
                            🏠 Voltar para Home
                        </button>
                    </Link>
                    <Link href="/contato">
                        <button className={styles.button}>
                            💬 Fale Conosco
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}