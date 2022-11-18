import { useState } from 'react';
import memesData from '../memesData';

export default function CreateMemeForm() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getNewImage(e) {
    const memesArr = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randomNum].url;
    e.preventDefault();
    setMeme((prevMemes) => ({ ...prevMemes, randomImage: url }));
  }

  function getTopText(e) {
    setMeme((prevMeme) => ({ ...prevMeme, topText: e.target.value }));
  }
  function getBottomText(e) {
    setMeme((prevMeme) => ({ ...prevMeme, bottomText: e.target.value }));
  }

  return (
    <main>
      <form className="meme-form">
        <input
          className="form-input"
          value={meme.topText}
          type="text"
          name="topText"
          placeholder="Top Text"
          onChange={getTopText}
        />
        <input
          className="form-input"
          type="text"
          name="bottomText"
          value={meme.bottomText}
          placeholder="Bottom Text"
          onChange={getBottomText}
        />

        <button className="btn" onClick={getNewImage}>
          Get a new meme image 🖼
        </button>
      </form>
      <img src={meme.randomImage} alt="" />
    </main>
  );
}

