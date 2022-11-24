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

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
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
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="text"
          name="bottomText"
          value={meme.bottomText}
          placeholder="Bottom Text"
          onChange={handleChange}
        />

        <button className="btn" onClick={getNewImage}>
          Get a new meme image 🖼
        </button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
