function getMonthly(perHour) {
    return perHour * 8 * 22;
}

function getAnnual(monthlySalary) {
    return monthlySalary * 12;
}

let hourly = input
monthlySalary = getMonthly(hourly);
annualSalary = getAnnual(monthlySalary);

let output = 
`Monthly salary is: \tRM${monthlySalary}

Annual salary is: \tRM${annualSalary}`;

console.log(output);