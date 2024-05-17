import inquirer from "inquirer";

const randomNumber : number = Math.floor(10000 + Math.random() * 90000);
let myBalance : number = 0;
let answers = await inquirer.prompt([
    {
     name: "studentlogin",
     type: "input",
     message: "Please enter your login id:",
     validate : function(value){
     if(value.trim() !== ""){
        return true
    }return "Please enter valid value.";
    },
    },
    {
     name: "courses",
     type:"list",
     message:"please select a course",
     choices:["html","css","javascript"]
    }
    ]);

const tutionfees : {[key : string] : number} = {
"html":2000,
"css": 3000,
"javascript":4000
};

console.log(`\ntutionfees: ${tutionfees[answers.courses]}/-\n`);
console.log(`\n my balance: ${myBalance}/-\n`);

let paymentType = await inquirer.prompt([
    {
     name:"payment",
     type:"list",
     message:"Select payment method",
     choices:["bank transfer","jazzcash","easypaisa"]
    },
    {
     name:"amount",
     type:"input",
     message:"enter the amount",
     validate: function(value){
     if(value.trim() !== "" ){
        return true
    } return "please enter a valid amount"
    },
    }
]);

console.log(`\n you select a ${paymentType.payment}\n`);

const tutionFee = tutionfees[answers.courses];
const paymentAmount = parseFloat(paymentType.amount);
     if(tutionFee === paymentAmount){
    console.log(`you are successfully enrolled in ${answers.courses}`);
    let ans = await inquirer.prompt([
        {
         name:"select",
         type:"list",
         message:"select any option from them",
         choices:["view status","exit"]
        }
]);
if(ans.select === "view status"){
    console.log("status:")
    console.log(`student name:${answers.studentlogin}`)
    console.log(`student id:${randomNumber}`)
    console.log(`course:${answers.courses}`)
    console.log(`tution fees paid:${paymentAmount}`)
    console.log(`balance:${myBalance += paymentAmount}`)
}else{console.log("exit done")}
    }else{
    console.log("please enter a valid amount");
    }