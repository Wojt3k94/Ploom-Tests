import { test, expect } from "@playwright/test";
import { ProductPage } from "../pages/productPage";
import { CartPage } from "../pages/cartPage";
import { openProductBySku } from "../utils/openProductBySku";

test("Verify if it is possible to add a product to the cart", async ({
	page,
}) => {
	const productPage = new ProductPage(page);
	const cartPage = new CartPage(page);

	await openProductBySku(page, "ploom-x-advanced");

	await productPage.addToCart();
	expect(await productPage.getBasketCount()).toBe("1");
	await productPage.openBasket();
	expect(await cartPage.isProductInCart("Ploom X Advanced")).toBeTruthy();
});
