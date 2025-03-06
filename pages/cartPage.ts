import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class CartPage extends BasePage {
	constructor(page: Page) {
		super(page);
	}

	async removeProductFromCart() {
		await this.page
			.getByTestId("main-section")
			.getByTestId("cartRemoveButton")
			.click();
		await this.page.getByTestId("remove-item-submit-button").click();
	}

	async isProductInCart(productName: string) {
		return await this.page.isVisible(`text=${productName}`);
	}

	async getCartTotalText(): Promise<string> {
		const totalElement = this.page.getByTestId("cartTotal");
		await totalElement.waitFor({ state: "visible" });

		const totalText = await totalElement.innerText();

		return totalText.replace("£", "");
	}
}
