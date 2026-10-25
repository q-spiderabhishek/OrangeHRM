class menu {

constructor(page) {

    this.page = page;

    this.admin = page.locator("//span[text()='Admin']");
    this.pim = page.locator("//span[text()='PIM']");
    this.leave = page.locator("//span[text()='Leave']");
    this.time = page.locator("//span[text()='Time']");
    this.recruitment = page.locator("//span[text()='Recruitment']");
    this.myinfo = page.locator("//span[text()='My Info']");
    this.performance = page.locator("//span[text()='Performance']");
    this.dashboard = page.locator("//span[text()='Dashboard']");
}
async adminmenu(){

    await this.admin.click();
}

async pimmenu(){

    await this.pim.click();
}
async leavemenu(){

    await this.leave.click();
}
async timemenu(){

    await this.time.click();
}
async recruitmentmenu(){

    await this.recruitment.click();
}
async myinfomenu(){

    await this.myinfo.click();
}
async performancemenu(){

    await this.performance.click();
}
async dashboardmenu(){

    await this.dashboard.click();
}

}
module.exports = {menu}