import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import memeImg from "../images/memeTest.gif";
import styles from "./styles.module.css";

function Meme() {
  const [memes, setMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const [caption, setCaption] = useState([]);
  const navigate = useNavigate();

  // next button

  const nextMeme = () => {
    setMemeIndex((props) => props + 1);
    console.log(memeIndex);
  };

  // generate memes

  const generateMeme = () => {
    const currentMeme = memes[memeIndex];
    const formData = new FormData();
    formData.append("username", "nirob01");
    formData.append("password", "meme-generator-pass-001");
    formData.append("template_id", currentMeme.id);
    caption.forEach((c, index) => formData.append(`boxes[${index}][text]`, c));

    fetch("https://api.imgflip.com/caption_image", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => navigate(`/generated?url=${data.data.url}`));
  };

  // suffle memese

  const suffleMemes = (memesArray) => {
    const array = memesArray;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random(array) * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  //   updating caption

  const updateCaption = (e, index) => {
    const text = e.target.value || "";
    setCaption(
      caption.map((currentEl, i) => {
        if (i === index) {
          return text;
        }
        return currentEl;
      })
    );
  };

  // get memes

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        const memeData = data.data.memes;
        suffleMemes(memeData);
        setMemes(memeData);
      });
  }, []);

  // set caption array

  useEffect(() => {
    if (memes.length) {
      setCaption(Array(memes[memeIndex].box_count).fill(""));
    }
    console.log(caption);
  }, [memeIndex, memes]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.memeGenerator}>
          <button
            type="button"
            onClick={generateMeme}
            className={styles.genBtn}
          >
            Generate Meme
          </button>
          <button onClick={nextMeme} type="button" className={styles.nextBtn}>
            Next
          </button>
          <div className={styles.inputFeild}>
            {caption.map((currentEl, index) => (
              <input
                type="text"
                className={styles.inputs}
                placeholder="enter meme text.."
                key={index}
                onChange={(e) => updateCaption(e, index)}
              />
            ))}
          </div>
        </div>
        <div className={styles.memeImg}>
          <img src={memes.length ? memes[memeIndex].url : memeImg} alt="meme" />
        </div>
      </div>
    </div>
  );
}

export default Meme;
