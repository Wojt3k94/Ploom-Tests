import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
	constructor(page: Page) {
		super(page);
	}

	async clickShop() {
		await this.page.getByTestId("headerItem-0").click();
		await this.page.mouse.click(0, 0);
	}
}
