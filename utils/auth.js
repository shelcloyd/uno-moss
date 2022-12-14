const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.redirect("/");
  } else {
    console.log("perfect!");
    console.log(req.session);
    next();
  }
};

module.exports = withAuth;
