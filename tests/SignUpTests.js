import {HomePage} from  "../pages/HomePage.js"
import {SignUpPage} from  "../pages/SignUpPage.js"

const homePage = new HomePage();
const signUpPage = new SignUpPage();

fixture `Getting Started`.page`https://phptravels.net`;

test ("User can successfully register new accout ", async (t) => {
await t.maximizeWindow();
await homePage.clickSignUpLink();
await signUpPage.filledCustomerInfo("Shefat","Zannat","01918722178","shifat.zannat.rn@gmail.com","T@skor123");
await signUpPage.clickSignUpButton();
});

