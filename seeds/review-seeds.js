const { Review } = require('../models');

const reviewdata = [
  {
    review_text: 'Tastes like a handful of raspberries!',
    user_id: 1,
    beverage_id: 1
  },
  {
   review_text: 'Great IPA - just enough hoppy taste.',
   user_id: 1,
   beverage_id: 2
 },
 {
   review_text: "When everyone else is drinking margs, it's Modelo Negra for me.",
   user_id: 1,
   beverage_id: 6
 },
 {
   review_text: "Avoid the hangover. Drink Tito's.",
   user_id: 2,
   beverage_id: 3
 },
 {
   review_text: 'Honestly the BEST gin. Periodt.',
   user_id: 2,
   beverage_id: 4
 },
 {
   review_text: 'I thought I hated spiced rum, but then I tried this - I LOVE IT!',
   user_id: 2,
   beverage_id: 11
 },
 {
   review_text: 'Sammy Hagar knows tequila.',
   user_id: 3,
   beverage_id: 5
 },
 {
   review_text: "When you're too classy for Corona.",
   user_id: 3,
   beverage_id: 6
 },
 {
   review_text: 'Great for sipping and mixing!',
   user_id: 3,
   beverage_id: 11
 },
 {
   review_text: 'Makes a perfect Old Fashioned.',
   user_id: 4,
   beverage_id: 7
 },
 {
   review_text: 'My grandpa introduced me to Chivas. I always toast to him when I drink it.',
   user_id: 4,
   beverage_id: 8
 },
 {
   review_text: 'The perfect whiskey for a lazy summer day.',
   user_id: 4,
   beverage_id: 12
 },
 {
   review_text: "If it's fancier than Coors, it's trying too hard.",
   user_id: 5,
   beverage_id: 9
 },
 {
   review_text: 'On the 8th day, he created Budweiser.',
   user_id: 5,
   beverage_id: 10
 },
 {
   review_text: 'Will get you turnt.',
   user_id: 5,
   beverage_id: 3
 },
 {
   review_text: 'The BEST spiced rum EVER.',
   user_id: 6,
   beverage_id: 11
 },
 {
   review_text: 'This is the only drink you need on a summer night.',
   user_id: 6,
   beverage_id: 12
 },
 {
   review_text: "I don't normally like beer, but when I was in New Orleans this was the only thing I wanted to drink. SO GOOD!",
   user_id: 6,
   beverage_id: 1
 }

];

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;