var { expect } = require('@playwright/test');
var { test } = require('../Fixture/adminfixture');

test(" Search user ", async function({adminfix}){
    
await adminfix.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Admin");
await adminfix.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow']").nth(0).click();
await adminfix.keyboard.press("ArrowDown");
await adminfix.keyboard.press("Enter");
await adminfix.locator("//input[@placeholder='Type for hints...']").fill("Admin");
await adminfix.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow']").nth(1).click();
await adminfix.keyboard.press("ArrowDown");
await adminfix.keyboard.press("Enter");
await adminfix.waitForTimeout(5000);
await adminfix.locator("//button[text()=' Search ']").click();

await adminfix.evaluate(()=>{

    window.scrollTo({
      
        top :document.body.scrollHeight,
        behavior :"instant"

    })
   })

await adminfix.waitForTimeout(5000);

})


test(" Reset user ", async function({adminfix}){
    
await adminfix.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Admin");
await adminfix.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow']").nth(0).click();
await adminfix.keyboard.press("ArrowDown");
await adminfix.keyboard.press("Enter");
await adminfix.locator("//input[@placeholder='Type for hints...']").fill("Admin");
await adminfix.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow']").nth(1).click();
await adminfix.keyboard.press("ArrowDown");
await adminfix.keyboard.press("Enter");
await adminfix.waitForTimeout(5000);
await adminfix.locator("//button[text()=' Reset ']").click();


})

test(" Add user button ", async function({adminfix}){
    
await adminfix.locator("//button[text()=' Add ']").click();
await adminfix.locator("(//input[@type='password'])[2]").fill("1234");
await expect(adminfix.getByRole('button', { name: 'Cancel' })).toBeEnabled();
await adminfix.locator("//button[text()=' Cancel ']").click();



})

test(" Edit user button ", async function({adminfix}){

    await adminfix.evaluate(()=>{

    window.scrollTo({
      
        top :document.body.scrollHeight,
        behavior :"instant"

    })
   })


await adminfix.waitForTimeout(5000);
    
await adminfix.locator("//i[@class='oxd-icon bi-pencil-fill']").nth(0).click();
await adminfix.waitForTimeout(5000);
await expect(adminfix.locator("//p[text()=' * Required']")).toBeVisible();
await adminfix.locator("//button[text()=' Cancel ']").click();



})


test(" select all checkbox functionality ", async function({adminfix}){

    await adminfix.evaluate(()=>{

    window.scrollTo({
      
        top :document.body.scrollHeight,
        behavior :"instant"

    })
   })


await adminfix.waitForTimeout(5000);
    
var checkboxlist = await adminfix.locator("//span[@class='oxd-checkbox-input oxd-checkbox-input--active --label-right oxd-checkbox-input']");
console.log(await checkboxlist.count());

   for(var i = 0; i<await checkboxlist.count(); i++){

    await checkboxlist.nth(0).click();

   }

   await adminfix.waitForTimeout(5000);

   await expect(adminfix.getByRole('button', { name: 'Delete Selected' })).toBeEnabled();

})
   
