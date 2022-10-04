import { faker } from "@faker-js/faker";

export function generateProduct(id: number) {
  const name = faker.commerce.product();
  // const id = faker.commerce.product();
  const price = faker.commerce.price();
  const image = faker.image.abstract(2000, 2000, true);
  return { name, image, price, id };
}
