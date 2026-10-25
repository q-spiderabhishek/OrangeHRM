const{test: base} = require('@playwright/test');

const test = base.extend({

// custome ficture for login

logedinfixture: async ({page},use)=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[text()=' Login ']").click();

    // pass the prepared page object to the test

    await use(page);

    // close the window

    await page.evaluate(()=>window.localStorage.clear());

}

})

module.exports = {test};