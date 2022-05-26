const Url = require('../models/url');
const shortid = require('shortid');

async function urlShorted(req, res) {
  const { originalUrl } = req.body;
  const base = process.env.baseUrl || "http://localhost:5000";

  const urlCode = shortid.generate();
  try {
      console.log('shorted');
      const shortedUrl = base + '/' + urlCode;

      url = new Url({
        originalUrl,
        shortedUrl,
        urlCode,
      });

      await url.save();

      res.status(201).json(url)
    } catch (err) {
      console.error(err);
      res.status(500).json('Server Error');
  }
}

async function redirectUrl(req, res) {
  const { code } = req.params;
  console.log(code);
  try {
    const url = await Url.findOne({ urlCode: code })

    console.log(url);

    if(url) {
      url.clicks++;
      await url.save();
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json('Not url found');
    }

    } catch (err) {
      console.error(err);
      res.status(500).json('Server Error');
  }
}

async function urlsIndex(req, res) {
  try {
    const urls = await Url.find();
    res.status(200).json(urls);
  } catch (err) {
    res.status(500).json('Server Error');
  }
}

async function deleteUrl(req, res) {
  const { id } = req.params;
  try {
    const url = await Url.findByIdAndDelete({ _id: id });
    res.status(202).json(url);
  } catch (err) {   
    res.json(err);
  }
}

async function updateUrl(req, res) {
  const { id } = req.params;
  try {
    const url = await Url.findById({ _id: id });
    Object.assign(url, req.body);
    await url.save();
    res.status(202).json(url);
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  urlShorted,
  redirectUrl,
  urlsIndex,
  deleteUrl,
  updateUrl
}