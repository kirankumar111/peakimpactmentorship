exports.getKiravi = (req, res, next) => {
  res.render("kiravi", {
    pageTitle: "Own Your Life",
    isAuthenticated: req.session.isLoggedIn
  });
};
