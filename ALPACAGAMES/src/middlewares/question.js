/**
 * Middleware que verifica si el usuario ha iniciado sesión.
 * Si el usuario ha iniciado sesión, redirige al usuario a la URL raíz.
 * Si el usuario no ha iniciado sesión, llama a la siguiente función middleware.
 * @param {Object} req - Objeto que representa la solicitud HTTP.
 * @param {Object} res - Objeto que representa la respuesta HTTP.
 * @param {Function} next - Función que llama a la siguiente función middleware.
 */
function areYouLogged(req, res, next) {
  if (req.session.userAreLogged) {
    res.redirect('/');
  }
  next();
}

module.exports = areYouLogged;
