import React from "react";
import styles from "./CardList.module.css";
import Pagination from "../Pagination/pagination";

const CardList = () => {
    return (
        <div className={styles.container}> CardList
        <Pagination />
        </div>
    );
}

export default CardList;