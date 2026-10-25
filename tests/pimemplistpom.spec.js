import{test} from '../Fixture/login_fix_pom';
import { expect } from '@playwright/test';
import {pimpagefunction} from '../pomclass/pimpage';
import {menu} from '../pomclass/menubarpage';
import {comon} from '../pomclass/commonpage';


test("validate the pim --> Employee lits functionality" , async function({page, logInpage}){

    const mp = new menu(page);  // create object for menubarpage
    await mp.pimmenu();

    const pp = new pimpagefunction(page); // create object for pimpage
    await page.waitForTimeout(10000);
    await pp.createempname("Abhishek");
    await pp.createempid("12345");
    await pp.createsupervisor("rameez");
    await pp.empstatusdropdown();
    await pp.includedropdown();
    await pp.jobtiteldropdown
    await pp.resetbtn1();

})

test("validate the pim --> Add Employee" , async function({page, logInpage}){

    const mp = new menu(page);  // create object for menubarpage
    await mp.pimmenu();

    const pp = new pimpagefunction(page);  // create object for pimpage
    await page.waitForTimeout(10000);
    await pp.addemp1();
    await pp.firstname("Abhishek");
    await pp.middlename("Bharatbhai");
    await pp.lastname("Patel");
    await pp.tglbtn();
    await pp.username("Ghuluboy");
    await pp.password("P..Abhi@2896");
    await pp.cpassword("P..Abhi@2896");
    await pp.radiobtn1();
    await pp.uploadfile1();
    await pp.cancelbtn1();


})

test("validate the pim --> search Report" , async function({page, logInpage}){

    const mp = new menu(page);  // create page for menubarpage
    await mp.pimmenu();

    const pp = new pimpagefunction(page); // create page for pimpage
    await page.waitForTimeout(10000);

    await expect(page.getByRole('link', { name: 'Reports' })).toBeVisible();
    await pp.report1();
    await expect(page.getByRole('textbox').first()).toBeVisible();
    await pp.reportname1("E");
    await expect(page.getByRole('option').first()).toBeVisible();

    const cm = new comon(page); // create object for commonpage

    await cm.pressArrowDown(2);
    await cm.pressEnter();
    await pp.searchbtn1();
    await cm.scrolltobottom();
    
})