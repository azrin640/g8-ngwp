const passport = require('passport');
const mongoose = require('mongoose');
const axios = require('axios');
const {promisify} = require("es6-promisify");
var WooCommerceAPI = require('woocommerce-api');

var WooCommerce = new WooCommerceAPI({
  url: 'http://localhost:8000',
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  wpAPI: true,
  version: 'wc/v3'
});



exports.getProducts = (req, res) => {

    WooCommerce.get('products?per_page=20', (err, data, response) => {
        if(response){
            const products = JSON.parse(response);
            res.json(products);
        }
        else if(err) res.json(err);
    });

}

exports.getCategories = (req, res) => {

    WooCommerce.get('products/categories?per_page=20',(err, data, response) => {
        if(response){
            const categories = JSON.parse(response);
            res.json(categories);
        }
        else if(err) res.json(err);  
    });
}