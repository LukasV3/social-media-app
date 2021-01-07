module.exports.getLoginForm = (req, res, next) => {
  res.status(200).render("login", { user: res.locals });
};

module.exports.getFeed = (req, res, next) => {
  const username = res.locals.user.username;
  res.send(`THIS IS YOUR FEED ${username}`);
};
