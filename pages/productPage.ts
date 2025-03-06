import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class ProductPage extends BasePage {
	constructor(page: Page) {
		super(page);
	}

	async openProductBySku(sku: string) {
		await this.page.locator(`[data-sku="${sku}"]`).click();
	}

	async addToCart() {
		await this.page.getByTestId("pdpAddToProduct").click();
	}

	async getBasketCount() {
		return await this.page.getByTestId("cartQuantity").getAttribute("value");
	}

	async openBasket() {
		await this.page.getByTestId("miniCartCheckoutButton").click();
	}
}
