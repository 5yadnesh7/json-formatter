"use client"
import React from 'react'
import styles from './page.module.scss'
import { useRouter } from 'next/navigation';

const Aboutus = () => {

    const router = useRouter();

    return (
        <div className={styles["aboutusContainer"]}>
            <div className={styles["header"]}>
                <h1>JSON Stringify, Formatter and Prettier</h1>
                <div className={styles["rightContainer"]}>
                    <label onClick={() => router.push("/")}>Home</label>
                    <label onClick={() => router.push("/privacy-policy")}>Privacy Policy</label>
                </div>
            </div>
            <div className={styles["contains"]}>
                <div className={styles["container"]}>
                    <label className={styles["title"]}>About us</label>
                    <p className={styles["desc"]}>Welcome to JSON Formatter! We are passionate about simplifying the way you work with JSON data.
                        Our mission is to provide a user-friendly tool that makes formatting and beautifying JSON effortless.</p>
                </div>
                <div className={styles["container"]}>
                    <label className={styles["title"]}>Contact us</label>
                    <p className={styles["desc"]}>Have questions or feedback? We&apos;d love to hear from you!</p>
                    <p className={styles["desc"]}>Email:  <span className={styles["bold"]}>gaikwadyadnesh@gmail.com</span></p>
                </div>
            </div>
        </div>
    )
}

export default Aboutus