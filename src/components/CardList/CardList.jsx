import React from "react";
import styles from "./CardList.module.css";
import Pagination from "@/components/Pagination/Pagination";

const CardList = () => {
    return (
        <div className={styles.container}> CardList
        <Pagination/>
        </div>
    );
}

export default CardList;