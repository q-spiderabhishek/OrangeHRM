import{test} from '../Fixture/login_fix_pom';
import { expect } from '@playwright/test';


test("validate the admin button", async({page, logInpage})=>{



await expect(page.locator("//span[text()='Admin']")).toBeVisible();
await logInpage.locator("//span[text()='Admin']").click();

})