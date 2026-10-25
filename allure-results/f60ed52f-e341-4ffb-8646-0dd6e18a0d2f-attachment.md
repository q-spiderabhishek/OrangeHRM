# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pimemplistpom.spec.js >> validate the pim --> Add Employee
- Location: tests\pimemplistpom.spec.js:24:5

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
              - paragraph [ref=f3e127]: Muhammad Rehman
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
    - generic [ref=f3e147]:
      - heading "Add Employee" [level=6] [ref=f3e148]
      - separator [ref=f3e149]
      - generic [ref=f3e150]:
        - generic [ref=f3e151]:
          - generic [ref=f3e152]:
            - generic [ref=f3e154]:
              - button "Choose File"
              - generic [ref=f3e155]:
                - img "profile picture" [ref=f3e157]
                - button "" [ref=f3e158] [cursor=pointer]
            - paragraph [ref=f3e160]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f3e161]:
            - generic [ref=f3e162]:
              - generic [ref=f3e165]:
                - generic [ref=f3e166]: Employee Full Name*
                - generic [ref=f3e168]:
                  - textbox "First Name" [ref=f3e171]: Abhishek
                  - textbox "Middle Name" [ref=f3e174]: Bharatbhai
                  - textbox "Last Name" [ref=f3e177]: Patel
              - generic [ref=f3e180]:
                - generic [ref=f3e181]: Employee Id
                - textbox [ref=f3e184]: "0548"
            - separator [ref=f3e185]
            - generic [ref=f3e186]:
              - paragraph [ref=f3e187]: Create Login Details
              - checkbox [checked] [ref=f3e190]
            - generic [ref=f3e193]:
              - generic [ref=f3e195]:
                - generic [ref=f3e196]: Username*
                - textbox [ref=f3e199]: Ghuluboy
              - generic [ref=f3e201]:
                - generic [ref=f3e202]: Status
                - generic [ref=f3e204]:
                  - generic [ref=f3e208] [cursor=pointer]:
                    - radio "Enabled" [ref=f3e209]
                    - text: Enabled
                  - generic [ref=f3e214] [cursor=pointer]:
                    - radio "Disabled" [checked] [active] [ref=f3e215]
                    - text: Disabled
            - generic [ref=f3e218]:
              - generic [ref=f3e219]:
                - generic [ref=f3e220]: Strongest
                - generic [ref=f3e221]:
                  - generic [ref=f3e222]: Password*
                  - textbox [ref=f3e225]: P..Abhi@2896
                - paragraph [ref=f3e226]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
              - generic [ref=f3e228]:
                - generic [ref=f3e229]: Confirm Password*
                - textbox [ref=f3e232]: P..Abhi@2896
        - separator [ref=f3e233]
        - generic [ref=f3e234]:
          - paragraph [ref=f3e235]: "* Required"
          - button "Cancel" [ref=f3e236] [cursor=pointer]
          - button "Save" [ref=f3e237] [cursor=pointer]
    - generic [ref=f3e238]:
      - paragraph [ref=f3e239]: OrangeHRM OS 5.9
      - paragraph [ref=f3e240]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e241] [cursor=pointer]:
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
  7  | test("validate the pim --> Employee lits functionality" , async function({page, logInpage}){
  8  | 
  9  |     const mp = new menu(page);
  10 |     await mp.pimmenu();
  11 | 
  12 |     const pp = new pimpagefunction(page);
  13 |     await page.waitForTimeout(10000);
  14 |     await pp.createempname("Abhishek");
  15 |     await pp.createempid("12345");
  16 |     await pp.createsupervisor("rameez");
  17 |     await pp.empstatusdropdown();
  18 |     await pp.includedropdown();
  19 |     await pp.jobtiteldropdown
  20 |     await pp.resetbtn1();
  21 | 
  22 | })
  23 | 
  24 | test("validate the pim --> Add Employee" , async function({page, logInpage}){
  25 | 
  26 |     const mp = new menu(page);
  27 |     await mp.pimmenu();
  28 | 
  29 |     const pp = new pimpagefunction(page);
  30 |     await page.waitForTimeout(10000);
  31 |     await pp.addemp1();
  32 |     await pp.firstname("Abhishek");
  33 |     await pp.middlename("Bharatbhai");
  34 |     await pp.lastname("Patel");
  35 |     await pp.tglbtn();
  36 |     await pp.username("Ghuluboy");
  37 |     await pp.password("P..Abhi@2896");
  38 |     await pp.cpassword("P..Abhi@2896");
  39 |     await pp.radiobtn1();
  40 |     await pp.uploadfile1();
> 41 |     await page.waitForTimeout(10000);
     |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  42 |     await pp.cancelbtn1();
  43 | 
  44 | 
  45 | })
```