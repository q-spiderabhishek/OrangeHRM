class loginpage {

constructor(page) {

    this.page = page;
    this.username = page.locator("//input[@name='username']");
    this.password = page.locator("//input[@name='password']");
    this.loginbtn = page.locator("//button[text()=' Login ']");
}

async navigation(){

    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


}

async createusername(username1){

    await this.username.fill(username1);
}
async createpassword(password1){

    await this.password.fill(password1);
}
async loginbtn1(){

    await this.loginbtn.click();
}
}

module.exports = {loginpage}