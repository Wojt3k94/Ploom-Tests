import { test, expect } from "@playwright/test";
import { ProductPage } from "../pages/productPage";
import { CartPage } from "../pages/cartPage";
import { openProductBySku } from "../utils/openProductBySku";

test("Verify if it is possible to remove a product from the cart", async ({
	page,
}) => {
	const productPage = new ProductPage(page);
	const cartPage = new CartPage(page);

	await openProductBySku(page, "ploom-x-advanced");

	await productPage.addToCart();
	expect(await productPage.getBasketCount()).toBe("1");
	await productPage.openBasket();

	await cartPage.removeProductFromCart();

	expect(await cartPage.getCartTotalText()).toBe("0.00");
});
