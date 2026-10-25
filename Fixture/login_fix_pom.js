import {test as base ,expect} from '@playwright/test';
import { loginpage } from '../pomclass/loginpage';

export const test = base.extend({

   logInpage: async ({ page }, use) =>{
    const login = new loginpage(page);

    await login.navigation();
    await login.createusername("Admin");
    await login.createpassword("admin123");
    await login.loginbtn1();
    await use(page);

    
     
    }

});

export {expect};