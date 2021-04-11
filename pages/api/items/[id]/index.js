const { getProduct } = require("../../../../services");

export default async (req, res) => {
  res.status(200).json(await getProduct(req.query.id || ""));
};
