const port = process.env.PORT || 5000;
const dbURI = process.env.DBURI || 'mongodb+srv://gabi:WUhjolxN1Wo0LYNG@cluster0.bkwvr.mongodb.net/url-shorted';

module.exports = {
  dbURI,
  port,
}
