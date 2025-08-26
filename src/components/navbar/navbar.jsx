import React from "react";
import styles from "./navbar.module.css";
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <image src="/facebook.png" alt="facebook" width={24} height={24}/>
                <image src="/instagram.png" alt="instagram" width={24} height={24}/>
                <image src="/tiktok.png" alt="tiktok" width={24} height={24}/>
                <image src="/youtube.png" alt="youtube" width={24} height={24}/>
            </div>
            <div className={styles.logo}></div>
            <div className={styles.links}></div>
        </div>
    );
}

export default Navbar;