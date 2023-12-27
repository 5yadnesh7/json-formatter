"use client"
import { useRef, useState } from 'react'
import styles from './page.module.scss'
import CopyIcon from '@/icons/copyIcon';
import { useRouter } from 'next/navigation';

export default function Home() {

  const [jsonData, setJsonData] = useState({ userInp: "", outputJson: "" })
  const [copied, setCopied] = useState(false);
  const contentRef = useRef(null);
  const router = useRouter();

  const prettifyJson = (e) => {
    const inputVal = e.target.value
    try {
      if (inputVal) {
        const correctedInput = inputVal.replace(/([{,]\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:/g, '$1"$2":');
        const jsonObj = JSON.parse(correctedInput);
        const prettifiedJson = JSON.stringify(jsonObj, null, 4);
        setJsonData({ userInp: inputVal, outputJson: prettifiedJson });
      } else {
        setJsonData({ userInp: inputVal, outputJson: inputVal || '' });
      }
    } catch (error) {
      setJsonData({ userInp: inputVal, outputJson: inputVal || 'Invalid JSON' });
    }
  }

  const handleCopyClick = () => {
    if (jsonData.userInp) {
      if (contentRef.current) {
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = contentRef.current.textContent;

        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextarea);

        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 1500);
      }
    } else {
      setJsonData({ ...jsonData, outputJson: 'Enter json to formate' });
    }
  }

  const debounceFunc = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    }
  }

  const debouncedInputHandler = debounceFunc(prettifyJson, 300);

  return (
    <div className={styles["main-container"]}>
      <div className={styles["header"]}>
        <h1>Welcome to JSON Formatter</h1>
        <div className={styles["rightContainer"]}>
          <label onClick={() => router.push("/aboutus")}>About us</label>
          <label onClick={() => router.push("/privacy-policy")}>Privacy Policy</label>
        </div>
      </div>
      <div className={styles["json-container"]}>
        <div className={styles["json-inputContainer"]}>
          <textarea onChange={debouncedInputHandler} placeholder='Enter Json here' />
        </div>
        <div className={styles["json-outputContainer"]}>
          <div className={styles["copy-container"]}>
            <CopyIcon classname={styles["copyIcon"]} click={handleCopyClick} />
            {copied ? "Copied" : ""}
          </div>
          <pre ref={contentRef} className={styles["preJson"]}>{jsonData.outputJson}</pre>
        </div>
      </div>
      <div className={styles["contains"]}>
        <div className={styles["container"]}>
          <label className={styles["title"]}>Welcome to JSONease: Simplifying JSON Formatting for Ultimate Clarity</label>
          <p className={styles["desc"]}>Are you tired of wrestling with messy JSON code? Look no further-JSONease is your all-in-one solution, seamlessly combining the power of jsonease and a robust json formatter.</p>
        </div>
        <div className={styles["container"]}>
          <label className={styles["title"]}>Effortless JSON Beautification</label>
          <p className={styles["desc"]}>At JSONease, we pride ourselves on providing developers with a straightforward and efficient tool for jsonease. Our advanced json formatter is designed to transform your raw JSON data into elegantly structured, easy-to-read formats, ensuring your code not only functions flawlessly but also looks good doing it.</p>
        </div>
        <div className={styles["container"]}>
          <label className={styles["title"]}>Explore the Power of JSONease</label>
          <p className={styles["desc"]}>Why settle for ordinary when you can have extraordinary? Our platform goes beyond mere formatting – it's a playground for those who want to elevate their coding experience. With JSONease, jsonease becomes second nature, and the json formatter is your trusted companion in presenting your data with precision and style.</p>
        </div>
        <div className={styles["container"]}>
          <label className={styles["title"]}>Unleash the Potential</label>
          <p className={styles["desc"]}>Choose JSONease for an unparalleled journey into the world of jsonease and sophisticated json formatting. Elevate your coding game, simplify your workflow, and let your JSON data shine. It's not just formatting; it's a revolution. Try JSONease today and witness the transformation.</p>
        </div>
      </div>
    </div>
  )
}
