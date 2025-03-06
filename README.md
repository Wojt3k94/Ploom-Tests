Playwright Test Automation for Ploom Websites
This repository contains automated tests for the Ploom UK and Ploom Poland websites using Playwright.

Tests Overview
The project includes three main test files:

addToCart.spec.ts: Verifies if a product can be added to the cart.

removeFromCart.spec.ts: Verifies if a product can be removed from the cart.

brokenLinksImages.spec.ts: Checks for broken links and images on the product page.

Running All Tests
To run all tests across all configured projects, use the following command:

npx playwright test

Running Tests for a Specific Project
You can limit the tests to a specific website by using the --project option:

npx playwright test --project=ploom.co.uk
npx playwright test --project=ploom.pl
