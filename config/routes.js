const router = require('express').Router();
const urls = require('../controllers/url');

router.route('/')
  .get(urls.urlsIndex);

router.route('/:code')
  .get(urls.redirectUrl);

router.route('/:id')
  .delete(urls.deleteUrl)
  .put(urls.updateUrl);

router.route('/shorted')
  .post(urls.urlShorted);

module.exports = router;
