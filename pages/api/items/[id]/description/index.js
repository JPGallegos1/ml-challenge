const { getDescription } = require("../../../../../services");

export default async (req, res) => {
  res.status(200).json(await getDescription(req.query.id || ""));
};
