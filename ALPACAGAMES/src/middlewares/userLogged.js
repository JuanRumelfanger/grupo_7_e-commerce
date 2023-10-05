function userLogged(req, res, next){
    res.locals.isLogged = false;
    if(req.session && req.session.userAreLogged){
        res.locals.isLogged = true;
        res.locals.userAreLogged = req.session.userAreLogged;
    }
    next();
}
module.exports = userLogged;