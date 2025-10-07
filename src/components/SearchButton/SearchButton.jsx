import styles from "./SearchButton.module.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchButton({ onSearch }) {
    const [value, setValue] = useState("");

    const handleChange = (e) => setValue(e.target.value);

    const handleSearch = () => {
        if (onSearch) onSearch(value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={styles.searchInput}
                placeholder="Search products..."
            />
            <button
                type="button"
                onClick={handleSearch}
                className={styles.searchButton}
            >
                <FaSearch />
            </button>
        </div>
    );
}