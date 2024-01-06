"use client"
import React from 'react'
import styles from './page.module.scss'
import { useRouter } from 'next/navigation';

const PrivacyPolicy = () => {

    const router = useRouter();
    const domainName = typeof window !== "undefined" && window?.location?.origin
    const handleRedirect = () => {
        window.location.href = domainName
    }

    return (
        <div className={styles["privacyContainer"]}>
            <div className={styles["header"]}>
                <h1>JSON Stringify, Formatter and Prettier</h1>
                <div className={styles["rightContainer"]}>
                    <label onClick={() => router.push("/")}>Home</label>
                    <label onClick={() => router.push("/aboutus")}>About us</label>
                </div>
            </div>
            <div className={styles["contains"]}>
                <div className={styles["container"]}>
                    <label className={styles["title"]}>Privacy Policy</label>
                    <p className={styles["desc"]}>
                        JSON Formatter (&quot;us,&quot; &quot;we,&quot; or &quot;our&quot;) operates the <span className={styles["bold"]} onClick={handleRedirect}>{domainName}/</span> website (the &quot;Service&quot;).
                    </p>
                    <p className={styles["desc"]}>
                        This page outlines our privacy policy and how we handle user data.
                    </p>
                </div>
                <div className={styles["container"]}>
                    <label className={styles["title"]}>Data Collection</label>
                    <p className={styles["desc"]}>We want to assure our users that we do not collect or store any personal information while you use our JSON Formatter service.
                        We recognize and respect the importance of privacy,
                        and our commitment is to provide a tool for formatting JSON data without compromising your data security</p>
                </div>
                <div className={styles["container"]}>
                    <label className={styles["title"]}>No Personal Information</label>
                    <p className={styles["desc"]}>Our service is designed to operate entirely on the client-side,
                        meaning that your JSON data is processed locally in your browser.
                        As a result, no data is transmitted to our servers, and we do not capture, store, or analyze any user-specific information.</p>
                </div>
                <div className={styles["container"]}>
                    <label className={styles["title"]}>Cookies</label>
                    <p className={styles["desc"]}>We do not use cookies that track your behavior on our website.
                        Our focus is solely on providing a reliable and user-friendly JSON formatting tool without intruding into your privacy.</p>
                </div>
                <div className={styles["container"]}>
                    <label className={styles["title"]}>Changes to This Privacy Policy</label>
                    <p className={styles["desc"]}>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes.
                        We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy