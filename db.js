'use strict'

const Mongoose = require('mongoose');
const common = require('./config/common');

var bcrypt = require('bcrypt-nodejs');
const SALT_WORK_FACTOR = 8;

Mongoose.connect(common.default_set.mongoConnectionString);
const users = require('./schema/users')(Mongoose);
const categories = require('./schema/category')(Mongoose);


module.exports = {
    generateHash: function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    },
    validPassword: function(password, comparePassword) {
        return bcrypt.compareSync(password, comparePassword);
    },
    UserModel: function(){
    	return users;
    },
    CategoryModel: function(){
    	return categories;
    },
}