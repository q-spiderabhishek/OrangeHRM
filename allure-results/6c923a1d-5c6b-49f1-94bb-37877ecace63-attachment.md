# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pimemplistpom.spec.js >> validate the pim --> Report
- Location: tests\pimemplistpom.spec.js:46:5

# Error details

```
TypeError: page.getByRole(...).toBeVisible is not a function
```

# Test source

```ts
  1  | import{test} from '../Fixture/login_fix_pom';
  2  | import { expect } from '@playwright/test';
  3  | import {pimpagefunction} from '../pomclass/pimpage';
  4  | import {menu} from '../pomclass/menubarpage';
  5  | 
  6  | 
  7  | // test("validate the pim --> Employee lits functionality" , async function({page, logInpage}){
  8  | 
  9  | //     const mp = new menu(page);
  10 | //     await mp.pimmenu();
  11 | 
  12 | //     const pp = new pimpagefunction(page);
  13 | //     await page.waitForTimeout(10000);
  14 | //     await pp.createempname("Abhishek");
  15 | //     await pp.createempid("12345");
  16 | //     await pp.createsupervisor("rameez");
  17 | //     await pp.empstatusdropdown();
  18 | //     await pp.includedropdown();
  19 | //     await pp.jobtiteldropdown
  20 | //     await pp.resetbtn1();
  21 | 
  22 | // })
  23 | 
  24 | // test("validate the pim --> Add Employee" , async function({page, logInpage}){
  25 | 
  26 | //     const mp = new menu(page);
  27 | //     await mp.pimmenu();
  28 | 
  29 | //     const pp = new pimpagefunction(page);
  30 | //     await page.waitForTimeout(10000);
  31 | //     await pp.addemp1();
  32 | //     await pp.firstname("Abhishek");
  33 | //     await pp.middlename("Bharatbhai");
  34 | //     await pp.lastname("Patel");
  35 | //     await pp.tglbtn();
  36 | //     await pp.username("Ghuluboy");
  37 | //     await pp.password("P..Abhi@2896");
  38 | //     await pp.cpassword("P..Abhi@2896");
  39 | //     await pp.radiobtn1();
  40 | //     await pp.uploadfile1();
  41 | //     await pp.cancelbtn1();
  42 | 
  43 | 
  44 | // })
  45 | 
  46 | test("validate the pim --> Report" , async function({page, logInpage}){
  47 | 
  48 |     const mp = new menu(page);
  49 |     await mp.pimmenu();
  50 | 
  51 |     const pp = new pimpagefunction(page);
  52 |    // await page.waitForTimeout(10000);
> 53 |     await expect(page.getByRole('link', { name: 'Reports' }).toBeVisible())
     |                                                              ^ TypeError: page.getByRole(...).toBeVisible is not a function
  54 |     await pp.report1();
  55 |     page.getByRole('textbox');
  56 |     await expect(reportname).toBeVisible();
  57 |     await pp.reportname1("E");
  58 |     await page.waitForTimeout(10000);
  59 |     await page.keyboard.press("ArrowDown");
  60 |     await page.keyboard.press("ArrowDown");
  61 |     await page.keyboard.press("Enter");
  62 |     await pp.searchbtn1();
  63 |     
  64 | 
  65 | 
  66 | })
```