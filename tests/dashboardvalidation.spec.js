var { expect } = require('@playwright/test');
var { test } = require('../Fixture/loginfixture');

test("validation of dashboard", async function({logedinfixture}){

await expect(logedinfixture.locator("//h6[text()='Dashboard']")).toBeVisible();

})

test("validate the admin button" , async function({logedinfixture}){

await expect(logedinfixture.locator("//span[text()='Admin']")).toBeVisible();


})