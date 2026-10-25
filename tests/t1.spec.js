var {test , expect} = require("@playwright/test");
var {loginpage} = require('../webpage/loginpage')

test.describe("Login webpage" ,()=>{


test("validate the login functionality with valid credential" , async function({page}){

    var lp = new loginpage(page)
    await lp.navigate();

    await lp.loginform("Admin" ,"admin123");
    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
    
})

test("validate the login functionality with invalid credential" , async function({page}){

    var lp = new loginpage(page)
    await lp.navigate();

    await lp.loginform("Test" ,"test123");
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
    
      })

})