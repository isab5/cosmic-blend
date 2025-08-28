import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/home">
                        <Image src="/img/logoHeader.png" alt="Logo" width={150} height={100} />
                    </Link>
                    <div>
                        <nav className={styles.nav}>
                            <ul>
                                <li>
                                    <Link href="/sobreapi">Sobre a API</Link>
                                </li>
                                <li>
                                    <Link href="/contato">Contato</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}