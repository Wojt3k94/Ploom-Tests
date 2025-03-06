import { Page } from "@playwright/test";

export class BasePage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async navigate(url: string = "/") {
		await this.page.goto(url);
		await this.handleCookies();
		await this.handleAgeVerification();
	}

	async handleAgeVerification() {
		try {
			const ageVerificationButton = this.page
				.locator(".ageconfirmation__actionWrapper > div")
				.first();
			if (await ageVerificationButton.isVisible({ timeout: 10000 })) {
				await ageVerificationButton.click();
				console.log("Age verification accepted.");
			} else {
				console.log("Age verification banner not found or not visible.");
			}
		} catch (error) {
			console.error("Error handling age verification:", error);
		}
	}

	async handleCookies() {
		try {
			const cookieBanner = this.page.locator("#onetrust-accept-btn-handler");
			if (await cookieBanner.isVisible({ timeout: 10000 })) {
				await cookieBanner.click();
				console.log("Cookies accepted.");
			} else {
				console.log("Cookie banner not found or not visible.");
			}
		} catch (error) {
			console.error("Error handling cookies:", error);
		}
	}
}
