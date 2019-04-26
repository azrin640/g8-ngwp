const passport = require('passport');
const mongoose = require('mongoose');
const axios = require('axios');

exports.getLogin = async (req, res) => {

    const user = req.body;
    const response = await axios.post('http://localhost:8000/wp-json/aam/v1/authenticate', user);
    if(response && response.data) res.json(response.data);
};

exports.registerUser = async (req, res) => {

}
