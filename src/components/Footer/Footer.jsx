import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>  
            <div className={styles.container}>
                <p>© 2025 Crystal Amour. Todos os direitos reservados.</p>
                <p>Desenvolvido por Isabella Borin de Moraes Rosa</p>
            </div>
        </footer>
    );
}