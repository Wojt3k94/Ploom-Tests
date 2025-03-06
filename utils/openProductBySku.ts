import { Page } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { ProductPage } from "../pages/productPage";

export async function openProductBySku(page: Page, sku: string) {
	const homePage = new HomePage(page);
	const productPage = new ProductPage(page);

	await homePage.navigate("/");
	await homePage.clickShop();
	await productPage.openProductBySku(sku);
}
