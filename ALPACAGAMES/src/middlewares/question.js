function areYouLogged(req, res, next){
    if(req.session.userAreLogged){
        res.redirect('/')
    }
    next()
}
module.exports = areYouLogged