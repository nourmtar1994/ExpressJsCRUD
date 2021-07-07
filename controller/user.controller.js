//models import modules 
const userModel = require('../models/users/user')

exports.getUsers = (req, res, next) => {
    userModel.find({}, (error, result) => {
        let data = {
            type: false,
            title: "Users",
            users: [],
        }
        data.users = result
        res.render('user', data)

    })
}

exports.getUserByID = (req, res, next) => {
    let data = {
        type: true,
        title: 'user',
        id: req.params.id || null
    }
    if (data.id) {
        res.render('user', data)
    } else {
        res.redirect('/user')
    }
}

exports.insert = (req, res, next) => {
    const user = new userModel({
        fullname: req.body.fullname,
        email: req.body.email
    })
    user.save((res, error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(res._message)
        }

    });
    res.redirect('/user')
}

exports.delete = (req, res, next) => {
    userModel.deleteOne({ _id: req.params.id }, (error, doc) => {
        console.log(doc)
        res.redirect('/user')
    })
}

