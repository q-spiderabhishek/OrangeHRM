var { expect } = require('@playwright/test');
var { test } = require('../Fixture/adminfixture');

test(" Organization / General information ", async function({adminfix}){
    
     await adminfix.locator("//span[text()='Organization ']").click();

    // Click the "General Information" submenu option
    await adminfix.getByRole('menuitem', { name: 'General Information' }).click();

    await adminfix.locator("//span[@class='oxd-switch-input oxd-switch-input--active --label-left']").click();

    // Verify input value using group container locator
    await expect(adminfix.locator('.oxd-input-group', { hasText: 'Organization Name' }).getByRole('textbox')
    ).toHaveValue('OrangeHRM');

    await adminfix.locator("//div[@class='oxd-select-text oxd-select-text--active']").click();

    // Use exact matching to select 'India' specifically
    await adminfix.getByRole('option', { name: 'India', exact: true }).click();

    await adminfix.waitForTimeout(5000);

    await adminfix.getByRole('button', { name: 'save' }).click();

})


test(" Organization / Add location ", async function({adminfix}){
    
     await adminfix.locator("//span[text()='Organization ']").click();

    // Click the "General Information" submenu option
    await adminfix.getByRole('menuitem', { name: 'Locations' }).click();

    await adminfix.locator("//button[text()=' Add ']").click();

    await adminfix.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("Abhishek");

    await adminfix.locator("//input[@class='oxd-input oxd-input--active']").nth(2).fill("Bangalore");
    
    await adminfix.locator("//div[@class='oxd-select-text oxd-select-text--active']").click();

    // Use exact matching to select 'India' specifically
    await adminfix.getByRole('option', { name: 'India', exact: true }).click();

    await adminfix.waitForTimeout(5000);

    await adminfix.getByRole('button', { name: 'save' }).click();

})


test(" Organization / search and reset location ", async function({adminfix}){
    
    await adminfix.locator("//span[text()='Organization ']").click();

    // Click the "General Information" submenu option
    await adminfix.getByRole('menuitem', { name: 'Locations' }).click();


    await adminfix.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("Abhishek");

    await adminfix.locator('.oxd-input-group', { hasText: 'City' }).getByRole('textbox').fill("Bangalore");

    await adminfix.locator("//div[@class='oxd-select-text oxd-select-text--active']").click();

    // Use exact matching to select 'India' specifically
    await adminfix.getByRole('option', { name: 'India', exact: true }).click();

    await adminfix.waitForTimeout(5000);

    await adminfix.getByRole('button', { name: 'Search' }).click();

    await adminfix.waitForTimeout(5000);

    await adminfix.getByRole('button', { name: 'Search' }).click();


    })
