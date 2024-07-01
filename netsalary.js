/*
net salary calculator
gross salary - ask the user
total taxable amount
paye
nssf, nhif, housing levy
net taxable amount
net pay

Total Taxable Amount = G -(tier I, tier II(nssf))
Tiers: dependant on the gross salary, 6% of the limit
Tier I, 0-7000, Kes 420
Tier II, 7000 -36000 (29000), Kes1740
<7000, Tier I and Tier II: Kes2160
paye = total taxable amount* relevant tax rate
relevant tax rate: dependent on total taxable amount
[0 - 24000], 10%: paye = total taxable amount * 10/100
net taxable amount = total taxable amount - paye
nhif = 2.75% of gross salary
housing levy = 1.5% of gross salary
net pay = net taxable amount - (nhif + housing levy)
*/

const rl = require('readline');

// initializing
const io = rl.createInterface({
    input: process.stdin,
    output: process.stout
});

function nssf(gross_salary){
if(gross_salary < 7000) {
    return 420;
} else {
    //1740 + 420
    return 2160;
}
}

function paye(total_taxable_amount) {
if(total_taxable_amount <= 24000){
    return (total_taxable_amount*0.1)
} else if (total_taxable_amount >24000 && total_taxable_amount <= 32333) {
    return (total_taxable_amount*0.25);
} else if (total_taxable_amount > 32333 && total_taxable_amount <= 500000) {
    return (total_taxable_amount*0.3);
} else if (total_taxable_amount > 500000 && total_taxable_amount <= 80000) {
    return (total_taxable_amount*0.325);
} else {
    return (total_taxable_amount*0.35);
}
}

function net_pay (gross_salary) {
let total_taxable_amount = gross_salary - nssf(gross_salary);
let nhif = gross_salary*0.0275;
let housing_levy = gross_salary*0.015;
let net_taxable_amount = total_taxable_amount - paye(total_taxable_amount);
let net_pay = net_taxable_amount - (nhif + housing_levy);

return net_pay;
}

io.question("What is your gross salary",function(income) {
    io.close()
}

)