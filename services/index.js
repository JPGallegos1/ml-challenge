import { BASE_URL } from "../constants/keys";

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
    const author = {
      name: "Juan Pablo",
      apellido: "Gallegos",
    };
    let productsResponse = {};
    productsResponse.author = author;
    productsResponse.categories =
      products?.filters[0]?.values[0]?.path_from_root.map(
        (category) => category.name
      ) || [];
    productsResponse.items = products.results.map((product) => {
      return {
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
        location: product.address?.state_name,
      };
    });
    return productsResponse;
  } catch (error) {
    console.log(error);
  }
}

async function getProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/items/${id}`);
    const product = await response.json();
    console.log(product);
  } catch (error) {
    console.log(error);
  }
}

export { getResults, getProduct };
