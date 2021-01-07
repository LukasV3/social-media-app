module.exports.getLoginForm = (req, res, next) => {
  res.status(200).render("login", { user: res.locals.user });
};

module.exports.getFeed = (req, res, next) => {
  res.send("THIS IS YOUR FEED");
};
