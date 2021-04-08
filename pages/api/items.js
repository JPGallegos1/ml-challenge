const { getResults } = require("../../services/");

export default async (req, res) => {
  res.status(200).json(await getResults(req.query.q || ""));
};
