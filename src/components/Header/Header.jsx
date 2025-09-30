import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src="/img/cosmiclogo.png" alt="Logo" width={150} height={100} />
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/aboutapi">
                                <span>About API</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/products">
                                <span>Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}