import React, { useState } from "react";

function Meme() {
  const [artist, setArtist] = useState("");
  const [memeLine, setMemeLine] = useState("");
  const [gifUrls, setGifUrls] = useState([]); // plural & array

  function handleSubmit(e) {
    e.preventDefault();
    const query = `${artist} ${memeLine}`;
    fetch(
      `https://tenor.googleapis.com/v2/search?q=${query}&key=AIzaSyCiIDBX-QsgqScryaQivNv2CZlFft5GLcE`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          // grab top 2 gif urls
          const urls = data.results
            .slice(0, 2)
            .map(item => item.media_formats.gif.url);
          setGifUrls(urls);
        }
      })
      .catch((err) => console.error("API failed:", err));
  }

  return (
    <main>
      <form className="meme-form" onSubmit={handleSubmit}>
        <div className="meme-inputs">
          <input
            type="text"
            placeholder="Enter artist or character"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="input1"
          />
          <input
            type="text"
            placeholder="Enter meme line"
            value={memeLine}
            onChange={(e) => setMemeLine(e.target.value)}
            className="input2"
          />
        </div>
        <button className="meme-button" type="submit">
          Get Meme
        </button>
      </form>

      {/* Loop through the gifUrls array and render each meme */}
      <div className="meme-result">
        {gifUrls.map((url, index) => (
          <img key={index} src={url} alt={`Meme ${index}`} className="meme-img" />
        ))}
      </div>
    </main>
  );
}

export default Meme;
