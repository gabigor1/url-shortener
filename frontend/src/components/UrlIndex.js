import React, { useState, useEffect} from 'react';
import axios from 'axios';

function UrlIndex(){
  const [listOfUrls, setListOfUrls] = useState([]);

  const getUrls = async () => {
    try {
      const res = await axios.get(`http://localhost:5000`);
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
    };
  }

  const setUrls = async () => {
    const urls = await getUrls();
    setListOfUrls(urls);
  }

  const handleDelete = async (id) => {
    try {
    console.log(id);
    const res = await axios.delete(`http://localhost:5000/${id}`);
    return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setUrls();
  }, []);

  return (
    <>
    {listOfUrls.length > 0 &&
    <div className="index-wrapper">
      <div className="table">
        <div className="url">URL</div>
        <div>Shorted</div>
        <div>Click Counts</div>
        <div>Actions</div>
      </div>
      <div className="row-wrapper">
      {listOfUrls.map(url => (
        <div key={url._id} className="row">
        <div>{url.originalUrl}</div>
        <div><a href={url.shortedUrl}>{url.shortedUrl}</a></div>
        <div className="clicks">{url.clicks}</div>
        <button onClick={() => handleDelete(url._id)}>Delete</button>
      </div>
        ))}
      </div>
    </div>
    }
    </>
  );
}

export default UrlIndex;
