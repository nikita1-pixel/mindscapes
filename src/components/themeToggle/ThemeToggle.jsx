import styles from './ThemeToggle.module.css';
const ThemeToggle = () => {
    return (
        <div classname={styles.container}>
            <img  src="/moon.png" width={14} height={14} alt="moon"/>
            <div classname={styles.ball}></div>
            <img src="/sun.png" width={14} height={14} alt="sun"/>
        </div>
    );
}   
export default ThemeToggle;