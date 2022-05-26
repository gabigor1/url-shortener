import React, { useState } from "react";
import axios from "axios";
import UrlIndex from "./UrlIndex";

function UrlForm(){
  const [originalUrl, setOriginalUrl] = useState();
  const [shortedUrl, setShortedUrl] = useState();

  const handleSubmit = async () => {
    setShortedUrl(null)
    try {
      const res = await axios.post(`http://localhost:5000/shorted`, originalUrl);
      console.log(res);
      setShortedUrl(res.data)
    } catch (err) {
      console.log(err);
    };
  }

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder="" className="create-input"></input>
        </div>
        <div><button>CREATE</button></div>
      </form>
      {shortedUrl && (
        <a href={shortedUrl}></a>
      )}
      </div>
      <UrlIndex />
    </>
  );
}

export default UrlForm;