import { BASE_URL } from "../constants/keys";
const author = {
  name: "Juan Pablo",
  apellido: "Gallegos",
};

function getCategories(products) {
  const categories =
    products?.filters[0]?.values[0]?.path_from_root.map(
      (category) => category.name
    ) || [];
  return categories;
}

async function getResults(query) {
  try {
    const response = await fetch(`${BASE_URL}/sites/MLA/search?q=${query}`);
    const products = await response.json();
    if (!products) return {};
    let productsResponse = {};
    productsResponse.author = author;
    productsResponse.categories = getCategories(products);
    productsResponse.items = products.results.slice(0, 4).map((product) => {
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
    if (!id) return {};
    const response = await fetch(`${BASE_URL}/items/${id}`);
    const product = await response.json();
    let description = await getDescription(product.id);
    let productResponse = {};
    productResponse.author = author;
    productResponse.item = {
      id: product.id,
      title: product.title,
      price: {
        currency: product.currency_id,
        amount: product.price,
        decimals: product.price,
      },
      picture: product.pictures[0].url,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping,
      sold_quantity: product.sold_quantity,
      description,
    };
    return productResponse;
  } catch (error) {
    console.log(error);
  }
}

async function getDescription(id) {
  try {
    if (!id) return {};
    const response = await fetch(`${BASE_URL}/items/${id}/description`);
    const description = await response.json();
    return description.plain_text;
  } catch (error) {
    console.log(error);
  }
}

export { getResults, getProduct, getDescription };
