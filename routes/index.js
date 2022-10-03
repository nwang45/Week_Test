
/*Assignment 1, Section 008, Nanjin Wang, 301243786, October 2nd, 2022*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home',{title:'home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home',{title:'home'});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', 
  { title: 'about'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', 
  { title: 'projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', 
  { title: 'services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', 
  { title: 'contact'});
});
module.exports = router;
