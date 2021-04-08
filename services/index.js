import { BASE_URL } from "../constants/keys";
import { description, seller } from "../constants/helpers";

// async function getCategories(products) {
//   const categories =
//     products?.filters[0]?.values[0]?.path_from_root.map(
//       (category) => category.name
//     ) || [];
//   return categories;
// }

async function getResults(query) {
  try {
    const response = await fetch(`${BASE_URL}/sites/MLA/search?q=${query}`);
    const products = await response.json();
    if (!products) return {};
    const categories =
      products?.filters[0]?.values[0]?.path_from_root.map(
        (category) => category.name
      ) || [];
    return products.results?.map((product) => {
      return {
        author: seller(product.seller?.permalink),
        categories: [...categories],
        items: [
          {
            id: product.id,
            title: product.title,
            price: [
              {
                decimals: product.price,
                amount: Number(product.price.toFixed()),
                currency: product.currency_id,
              },
            ],
            picture: product.thumbnail,
            condition: product.condition,
            free_shipping: product.shipping?.free_shipping,
            description: description,
          },
        ],
      };
    });
  } catch (error) {
    console.log(error);
  }
}

export { getResults };
