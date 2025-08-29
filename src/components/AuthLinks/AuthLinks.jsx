import styles from './AuthLinks.module.css';
const AuthLinks = () => {

    //temproory
    const status = "notauthenticated";
    return <>
    {status === "notauthenticated" ? (
        <a href="/login">Login</a>
    ) : (
        <>
        <link href="/write">Write</link>
        <span className={styles.link}>Logout</span>
        </>
    )}
    </>
}   
export default AuthLinks;