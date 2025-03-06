import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./tests",
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : 1,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: "html",
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		headless: false,
		viewport: null,
		launchOptions: {
			args: ["--start-maximized"],
		},
		baseURL: "https://www.ploom.co.uk/en",
		screenshot: "only-on-failure",
		video: {
			mode: "retain-on-failure",
			size: { width: 1920, height: 1080 },
		},
		trace: "retain-on-failure",
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: "ploom.co.uk",
			use: { baseURL: "https://www.ploom.co.uk/en" },
		},
		{ name: "ploom.pl", use: { baseURL: "https://www.ploom.pl/pl" } }, // !!!!!!!!we can add here more pages to test!!!!!!!!

		// {
		// 	name: "firefox",
		// 	use: { ...devices["Desktop Firefox"] },
		// },

		// {
		// 	name: "webkit",
		// 	use: { ...devices["Desktop Safari"] },
		// },

		/* Test against mobile viewports. */
		// {
		//   name: 'Mobile Chrome',
		//   use: { ...devices['Pixel 5'] },
		// },
		// {
		//   name: 'Mobile Safari',
		//   use: { ...devices['iPhone 12'] },
		// },

		/* Test against branded browsers. */
		// {
		//   name: 'Microsoft Edge',
		//   use: { ...devices['Desktop Edge'], channel: 'msedge' },
		// },
		// {
		//   name: 'Google Chrome',
		//   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
		// },
	],
});
