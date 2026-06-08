import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
            <footer className={styles.footer}>
                <p><span>PokeNext</span> &copy; 2026</p>
                <p>Projeto criado por <a href="https://github.com/gabriellysaless" target="_blank" rel="noopener noreferrer"><FaGithub/> @gabriellysaless</a></p>
            </footer>
    )
}