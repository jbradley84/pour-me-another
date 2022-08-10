const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Review.findAll()
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  // expects => {review_text: "This is the review", user_id: 1, beverage_id: 1}
  Review.create({
   review_text: req.body.review_text,
    user_id: req.session.user_id,
    beverage_id: req.body.beverage_id
  })
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
   Review.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbReviewData => {
      if (!dbReviewData) {
        res.status(404).json({ message: 'No review found with this id!' });
        return;
      }
      res.json(dbReviewData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;