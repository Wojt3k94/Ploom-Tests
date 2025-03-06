import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { ProductPage } from "../pages/productPage";
import { openProductBySku } from "../utils/openProductBySku";

test("Verify if there are any broken links or images on the product page", async ({
	page,
}) => {
	const homePage = new HomePage(page);
	const productPage = new ProductPage(page);

	await openProductBySku(page, "ploom-x-advanced");

	const links = await page.$$eval("a", (links) =>
		links.map((link) => link.href)
	);
	for (const link of links) {
		const response = await page.goto(link);
		expect(response?.status()).toBe(200);
	}

	const images = await page.$$eval("img", (images) =>
		images.map((img) => img.src)
	);
	for (const image of images) {
		const response = await page.goto(image);
		expect(response?.status()).toBe(200);
	}
});
