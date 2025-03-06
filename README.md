## **Playwright Test Automation for Ploom Websites**  
This repository contains automated tests for the **Ploom UK** and **Ploom Poland** websites using Typescript and Playwright.  

---

## Tests Overview**  
The project includes the following test files:  

- **`addToCart.spec.ts`** – Verifies if a product can be added to the cart.  
- **`removeFromCart.spec.ts`** – Verifies if a product can be removed from the cart.  
- **`brokenLinksImages.spec.ts`** – Checks for broken links and images on the product page.  

---

## Running All Tests**  
To execute all tests across all configured projects, run:  
```bash
npx playwright test
```  

---

## Running Tests for a Specific Project**  
To run tests for a specific website, use the `--project` option:  
```bash
npx playwright test --project=ploom.co.uk
npx playwright test --project=ploom.pl
```  
