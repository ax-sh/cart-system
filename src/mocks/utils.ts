import { faker } from "@faker-js/faker";

export function generateProduct() {
  const name = faker.commerce.product();
  const image = faker.image.abstract(2000, 2000, true);
  return { name, image };
}
