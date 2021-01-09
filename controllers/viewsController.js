module.exports.getLoginForm = (req, res, next) => {
  let user = {};
  user.username = "";
  user.password = "";

  if (res.locals.user) {
    user = res.locals.user;
  }

  res.status(200).render("login", { user });
};

module.exports.getFeed = (req, res, next) => {
  const username = res.locals.user.username;
  res.send(`THIS IS YOUR FEED ${username}`);
};

module.exports.getSignupForm = (req, res, next) => {
  res.status(200).render("signup");
};
