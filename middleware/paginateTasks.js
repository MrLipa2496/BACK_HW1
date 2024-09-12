module.exports.paginateTasks = (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 1;
  const resultsPerPage = parseInt(req.query.results, 10) || 10;

  req.pagination = {
    page,
    resultsPerPage,
  };

  next();
};
