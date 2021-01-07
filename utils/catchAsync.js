module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

// if theres an error next will automatically be called with the parameter that catch recieves
