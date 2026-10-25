class pimpagefunction {

constructor(page) {

    // Xpath of PIM --> employee list page
    this.page = page;
    this.empname = page.locator("//input[@placeholder='Type for hints...']").nth(0);
    this.empid = page.locator("//input[@class='oxd-input oxd-input--active']").nth(1);
    this.supervisorname = page.locator("//input[@placeholder='Type for hints...']").nth(1);
    this.empstatus = page.locator("//div[@class='oxd-select-text oxd-select-text--active']").nth(0);
    this.include = page.locator("//div[@class='oxd-select-text oxd-select-text--active']").nth(1);
    this.jobtitel = page.locator("//div[@class='oxd-select-text oxd-select-text--active']").nth(2);
    this.subunit = page.locator("//div[@class='oxd-select-text oxd-select-text--active']").nth(3);
    this.resetbtn = page.locator("//button[text()=' Reset ']");
    this.searchbtn = page.locator("//button[text()=' Search ']");
    this.addbtn = page.locator("//button[text()=' Add ']");
    

    // Xapth of PIM --> Add employee page

    this.addemp = page.locator("//a[text()='Add Employee']");
    this.fname = page.locator("//input[@placeholder='First Name']");
    this.mname = page.locator("//input[@placeholder='Middle Name']");
    this.lname = page.locator("//input[@placeholder='Last Name']");
    this.togglebtn = page.locator("//span[@class='oxd-switch-input oxd-switch-input--active --label-right']");
    this.uname = page.locator("//input[@class='oxd-input oxd-input--active']").nth(2);
    this.pw = page.locator("//input[@type='password']").nth(0);
    this.cpw = page.locator("//input[@type='password']").nth(1);
    this.radiobtn = page.locator("//span[@class='oxd-radio-input oxd-radio-input--active --label-right oxd-radio-input']").nth(1);
    this.uploadfile = page.locator('input[type="file"]');
    this.cancel = page.locator("//button[text()=' Cancel ']");
    this.save = page.locator("//button[text()=' Save ']");

  // Xpath of PIM --> report page

  this.report = page.locator("//a[text()='Reports']");
  this.reportname = page.locator("//input[@placeholder='Type for hints...']");
  this.resetbtn = page.locator("//button[text()=' Reset ']");
  this.searchbtn = page.locator("//button[text()=' Search ']");
  this.addbtn = page.locator("//button[text()=' Add ']");

}
 // Action of PIM --> Employee list
async createempname(empname1){

    await this.empname.fill(empname1);
}
async createempid(empid1){

    await this.empid.fill(empid1);
}
async createsupervisor(supervisor1){

    await this.supervisorname.fill(supervisor1);
}
async empstatusdropdown(){

    await this.empstatus.click();
    await this.empstatus.getByRole('option', { name: 'Freelance', exact: true });
    
}
async includedropdown(){

    await this.include.click();
    await this.include.getByRole('option', { name: 'Past Employees Only', exact: true });
}
async jobtiteldropdown(){

    await this.jobtitel.click();
    await this.jobtitel.getByRole('option', { name: 'Automation Tester', exact: true });
}
async resetbtn1(){

    await this.resetbtn.click();
}
async searchbtn1(){

    await this.searchbtn.click();
}
async addbtn1(){

    await this.addbtn.click();
}



// Action of PIM --> Add employee



async addemp1(){

    await this.addemp.click();
}
async firstname(fname1){

    await this.fname.fill(fname1);
}
async middlename(mname1){

    await this.mname.fill(mname1);
}
async lastname(lname1){

    await this.lname.fill(lname1);
}
async tglbtn(){

    await this.togglebtn.click();
}
async username(uname1){

    await this.uname.fill(uname1);
}
async password(pw1){

    await this.pw.fill(pw1);
}
async cpassword(cpw1){

    await this.cpw.fill(cpw1);
}
async radiobtn1(){

    await this.radiobtn.click();
}
async uploadfile1(){


    await this.uploadfile.setInputFiles("Files/CYMERA_20150206_000746.jpg");
}

async cancelbtn1(){

    await this.cancel.click();
}
async savebtn1(){

    await this.save.click();
}

 // Action of PIM --> report

 async report1(){

    await this.report.click();
}
async reportname1(rname1){

    await this.reportname.fill(rname1);
    
}
async resetbtn1(){

    await this.resetbtn.click();
}
async searchbtn1(){

    await this.searchbtn.click();
}
async addbtn1(){

    await this.addbtn.click();
}


}

module.exports = {pimpagefunction}