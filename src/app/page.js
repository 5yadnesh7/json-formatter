"use client"
import { useRef, useState } from 'react'
import styles from './page.module.scss'
import CopyIcon from '@/icons/copyIcon';

export default function Home() {

  const [jsonData, setJsonData] = useState({ userInp: "", outputJson: "" })
  const [copied, setCopied] = useState(false);
  const contentRef = useRef(null);

  const prettifyJson = () => {
    try {
      if (jsonData.userInp) {
        const correctedInput = jsonData.userInp.replace(/([{,]\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:/g, '$1"$2":');
        const jsonObj = JSON.parse(correctedInput);
        const prettifiedJson = JSON.stringify(jsonObj, null, 4);
        setJsonData({ ...jsonData, outputJson: prettifiedJson });
      } else {
        setJsonData({ ...jsonData, outputJson: 'Enter json to formate' });
      }
    } catch (error) {
      setJsonData({ ...jsonData, outputJson: 'Invalid JSON' });
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

  return (
    <div className={styles["main-container"]}>
      <div className={styles["header"]}>Welcome to JSON Formatter</div>
      <div className={styles["json-container"]}>
        <div className={styles["json-inputContainer"]}>
          <textarea onChange={(e) => setJsonData({ ...jsonData, userInp: e.target.value })} placeholder='Enter Json here' />
        </div>
        <div className={styles["json-outputContainer"]}>
          <div className={styles["copy-container"]}>
            <CopyIcon classname={styles["copyIcon"]} click={handleCopyClick} />
            {copied ? "Copied" : ""}
          </div>
          <pre ref={contentRef} className={styles["preJson"]}>{jsonData.outputJson}</pre>
        </div>
      </div>
      <div className={styles["btn-container"]}>
        <button className={styles["submit-btn"]} onClick={prettifyJson}>Prettify JSON</button>
      </div>
    </div>
  )
}
