# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pimemplistpom.spec.js >> validate the pim --> Report
- Location: tests\pimemplistpom.spec.js:46:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f3e114]
        - link [ref=f3e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e117] [cursor=pointer]
        - list [ref=f3e123]:
          - listitem [ref=f3e124]:
            - generic [ref=f3e125] [cursor=pointer]:
              - img "profile picture" [ref=f3e126]
              - paragraph [ref=f3e127]: teste teste
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - listitem [ref=f3e132] [cursor=pointer]:
            - generic [ref=f3e133]:
              - text: Configuration
              - generic [ref=f3e134]: 
          - listitem [ref=f3e135] [cursor=pointer]:
            - link "Employee List" [ref=f3e136]:
              - /url: "#"
          - listitem [ref=f3e137] [cursor=pointer]:
            - link "Add Employee" [ref=f3e138]:
              - /url: "#"
          - listitem [ref=f3e139] [cursor=pointer]:
            - link "Reports" [ref=f3e140]:
              - /url: "#"
          - button "" [ref=f3e142] [cursor=pointer]
  - generic [ref=f3e144]:
    - generic [ref=f3e146]:
      - generic [ref=f3e147]:
        - generic [ref=f3e148]:
          - heading "Employee Reports" [level=5] [ref=f3e150]
          - button "" [ref=f3e153] [cursor=pointer]
        - separator [ref=f3e155]
        - generic [ref=f3e157]:
          - generic [ref=f3e161]:
            - generic [ref=f3e162]: Report Name
            - generic [ref=f3e165]:
              - textbox "Type for hints..." [active] [ref=f3e167]: E
              - listbox [ref=f3e168]:
                - option "All Employee Sub Unit Hierarchy Report" [ref=f3e169] [cursor=pointer]
                - option "Employee Contact info report" [ref=f3e171] [cursor=pointer]
                - option "Employee Job Details" [ref=f3e173] [cursor=pointer]
                - option "PIM Sample Report" [ref=f3e175] [cursor=pointer]
          - separator [ref=f3e177]
          - generic [ref=f3e178]:
            - button "Reset" [ref=f3e179] [cursor=pointer]
            - button "Search" [ref=f3e180] [cursor=pointer]
      - generic [ref=f3e181]:
        - button " Add" [ref=f3e183] [cursor=pointer]:
          - generic [ref=f3e184]: 
          - text: Add
        - generic [ref=f3e185]:
          - separator [ref=f3e186]
          - generic [ref=f3e187]: (4) Records Found
        - table [ref=f3e190]:
          - rowgroup [ref=f3e191]:
            - row [ref=f3e192]:
              - columnheader "" [ref=f3e193]:
                - generic [ref=f3e195] [cursor=pointer]:
                  - checkbox "" [ref=f3e196]
                  - generic [ref=f3e197]: 
              - columnheader "Name " [ref=f3e199]:
                - text: Name
                - generic [ref=f3e200]:
                  - generic [ref=f3e201] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f3e202]
          - rowgroup [ref=f3e203]:
            - row [ref=f3e205]:
              - cell "" [ref=f3e206]:
                - generic [ref=f3e209] [cursor=pointer]:
                  - checkbox "" [ref=f3e210]
                  - generic [ref=f3e211]: 
              - cell "All Employee Sub Unit Hierarchy Report" [ref=f3e213]
              - cell [ref=f3e215]:
                - generic [ref=f3e216]:
                  - button "" [ref=f3e217] [cursor=pointer]
                  - button "" [ref=f3e219] [cursor=pointer]
                  - button "" [ref=f3e221] [cursor=pointer]
            - row [ref=f3e224]:
              - cell "" [ref=f3e225]:
                - generic [ref=f3e228] [cursor=pointer]:
                  - checkbox "" [ref=f3e229]
                  - generic [ref=f3e230]: 
              - cell "Employee Contact info report" [ref=f3e232]
              - cell [ref=f3e234]:
                - generic [ref=f3e235]:
                  - button "" [ref=f3e236] [cursor=pointer]
                  - button "" [ref=f3e238] [cursor=pointer]
                  - button "" [ref=f3e240] [cursor=pointer]
            - row [ref=f3e243]:
              - cell "" [ref=f3e244]:
                - generic [ref=f3e247] [cursor=pointer]:
                  - checkbox "" [ref=f3e248]
                  - generic [ref=f3e249]: 
              - cell "Employee Job Details" [ref=f3e251]
              - cell [ref=f3e253]:
                - generic [ref=f3e254]:
                  - button "" [ref=f3e255] [cursor=pointer]
                  - button "" [ref=f3e257] [cursor=pointer]
                  - button "" [ref=f3e259] [cursor=pointer]
            - row [ref=f3e262]:
              - cell "" [ref=f3e263]:
                - generic [ref=f3e266] [cursor=pointer]:
                  - checkbox "" [ref=f3e267]
                  - generic [ref=f3e268]: 
              - cell "PIM Sample Report" [ref=f3e270]
              - cell [ref=f3e272]:
                - generic [ref=f3e273]:
                  - button "" [ref=f3e274] [cursor=pointer]
                  - button "" [ref=f3e276] [cursor=pointer]
                  - button "" [ref=f3e278] [cursor=pointer]
    - generic [ref=f3e281]:
      - paragraph [ref=f3e282]: OrangeHRM OS 5.9
      - paragraph [ref=f3e283]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e284] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  52 |     await page.waitForTimeout(10000);
  53 |     await expect(page.getByRole('link', { name: 'Reports' })).toBeVisible();
  54 |     await pp.report1();
  55 |     await expect(page.getByRole('textbox').first()).toBeVisible();
  56 |     await pp.reportname1("E");
> 57 |     await page.waitForTimeout(10000);
     |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  58 |     await page.keyboard.press("ArrowDown");
  59 |     await page.keyboard.press("ArrowDown");
  60 |     await page.keyboard.press("Enter");
  61 |     await pp.searchbtn1();
  62 |     await pp.evaluate(()=>{
  63 | 
  64 |     window.scrollTo({
  65 |       
  66 |         top :document.body.scrollHeight,
  67 |         behavior :"instant"
  68 | 
  69 |     })
  70 |    })
  71 |     
  72 | 
  73 |     
  74 | 
  75 | 
  76 | })
```