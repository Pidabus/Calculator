function getMonthly(perHour) {
    return perHour * 8 * 22;
}

function getAnnual(monthlySalary) {
    return monthlySalary * 12;
}

const hourlyView = document.querySelector(".hourly");
const monthlyView = document.querySelector(".monthly");
const annualView = document.querySelector(".annual");
const startButton = document.querySelector("button");

let hourly = null;
let monthlySalary = null;
let annualSalary = null;

function salaryCalculator() {
    startButton.addEventListener("click", (e) => {
        let getChoice = prompt("Input: \n1.Hourly salary \n2.Monthly salary \n3.Annual Salary");

        let salaryChoice = null;
        switch (getChoice) {
            case "1":
                salaryChoice = prompt("Your hourly salary in RM is:");
                hourly = salaryChoice;
                monthlySalary = getMonthly(hourly);
                annualSalary = getAnnual(monthlySalary);
                break;
            case "2":
                salaryChoice = prompt("Your monthly salary in RM is:");
                break;
            case "3":
                salaryChoice = prompt("Your annual salary in RM is:");
                break;
            default:
                alert("Not a valid choice!");
        } 

        hourlyView.textContent = `RM ${hourly}`;
        monthlyView.textContent = `RM ${monthlySalary}`;
        annualView.textContent = `RM ${annualSalary}`;
    });

}

salaryCalculator();