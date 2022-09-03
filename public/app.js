import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
/*

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 200);

let docs: HasFormatter[] = [];

docs.push(docOne);
docs.push(docTwo);

console.log(docs);

const invoiceOne = new Invoice("Manassés", "compra de DVD", 230);
const invoiceTwo = new Invoice("Synthia", "compra de TV", 450);

let invoices: Invoice[] = [];

invoices.push(invoiceOne);
invoices.push(invoiceTwo);

for (const invoice of invoices) {
  console.log(invoice);
}

*/
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, parseInt(amount.value)];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
//GENERICS
/*
const addUID = <T extends {name:string}>(obj:T) =>{
    let uid = Math.floor(Math.random() * 100);

    return {...obj,uid}
}

let docOne = addUID({name:'Man',age:20});

console.log(docOne.age);

//with interfaces
interface Resource<T>{
    uid:number;
    resourceName:string;
    data:T;
}


const docThree:Resource<string>={
    uid:1,
    resourceName:'person',
    data:'shau'
}

*/ 
