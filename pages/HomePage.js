import { Selector,t} from "testcafe";

export class HomePage{

    constructor(){ 
        this.signUpLink=Selector("a[href='https://www.phptravels.net/signup']");
        this.loginLink=Selector("a").withExactText("Login");
        this.cookie=Selector("#cookie_stop");
    }
    async clickSignUpLink(){
        await t.wait(5000);
        await t.click(this.cookie);
        await t.click(this.signUpLink);
    }
}
