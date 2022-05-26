import React, { useState } from "react";
import axios from "axios";
import UrlIndex from "./UrlIndex";

function UrlForm(){
  const [originalUrl, setOriginalUrl] = useState();
  const [shortedUrl, setShortedUrl] = useState();

  const handleSubmit = async () => {
    setShortedUrl(null)
    try {
      const res = await axios.post(`http://localhost:5000/shorted`, { originalUrl });
      console.log(res.data.shortedUrl);
      setShortedUrl(res.data)
    } catch (err) {
      console.log(err);
    };
  }


  return (
    <>
    <div className="form-wrapper">
      <h1>Url-Shortener</h1>
      <div className="input-wrapper">
        <div>
          <input onChange={(event) => setOriginalUrl(event.target.value)} placeholder="" className="create-input"></input>
        </div>
        <div><button onClick={handleSubmit}>CREATE</button></div>
      </div>
      {shortedUrl && (
        <a href={shortedUrl.shortedUrl}>{shortedUrl.shortedUrl}</a>
      )}
    </div>
    <UrlIndex />
    </>
  );
}

export default UrlForm;