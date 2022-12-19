import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";

function GeneratedMeme() {
  const location = useLocation();
  const url = new URLSearchParams(location.search).get("url");
  console.log(url);
  return (
    <div className={styles.container}>
      <div className={styles.memeImg}>
        <img download src={url || ""} alt="meme" />
      </div>
      <button type="button" className={styles.genBtn}>
        make more meme
      </button>

      <a className={styles.nextBtn} href={url || ""} download>
        download
      </a>
    </div>
  );
}

export default GeneratedMeme;
