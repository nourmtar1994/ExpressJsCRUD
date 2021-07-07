exports.getUsers = (req, res, next) => {
    let data = {
        type: false,
        title: "Users",
        users: [
            { id: 1, fullname: 'nour mtar' },
            { id: 3, fullname: 'amine Sallemi' },
            { id: 2, fullname: 'Najmeddine jlasi' }
        ],
    }
    res.render('user', data)

}
exports.getUserByID = (req, res, next) => {
    let data = {
        type: true,
        title: 'user',
        id: req.params.id || null
    }
    if (isNaN(data.id)) {
        data.id = "undefined user"
        res.render('user', data)
    } else {
        res.render('user', data)
    }
}
