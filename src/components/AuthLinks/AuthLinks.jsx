import styles from './AuthLinks.module.css';
const AuthLinks = () => {

    //temproory
    const status = "notauthenticated";
    return <>
    {status === "notauthenticated" ? (
        <link href="/login">Logout</link>
    ) : (
        <>
        <link href="/write">Write</link>
        <span>Logout</span>
        </>
    )}
    </>
}   
export default AuthLinks;