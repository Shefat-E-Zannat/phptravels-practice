import { Selector,t} from "testcafe";

export class SignUpPage{
    constructor(){ 
        this.firstName=Selector("input[name='first_name']");
        this.lastName=Selector("input[name='last_name']");
        this.phone=Selector("input[name='phone']");
        this.email=Selector("input[name='email']");
        this.password=Selector("input[name='password']");
        this.signUpBUtton=Selector("button[type='submit']");
    }
    async filledCustomerInfo(fname, lname, phone, email,pass){
        await t.firstName(this.firstName, fname);
        await t.lastName(this.lastName,lname);
        await t.phone(this.phone, phone);
        await t.email(this.email, email);
        await t.password(this.password, pass);
    }
    async clickSignUpButton(){
        await t.wait(5000);
        await t.click(this.signUpBUtton);
    }
}