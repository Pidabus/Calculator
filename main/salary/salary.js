function getMonthly(perHour) {
    return perHour * 8 * 22;
}

function getAnnual(monthlySalary) {
    return monthlySalary * 12;
}

function getHourly(salary, salaryType) {
    if (salaryType === "monthly") {
        let hourly = salary/176; // gets hourly form monthly

        return Number(hourly.toFixed(2));
    }
    if (salaryType === "yearly") {
        let hourly = salary/2112; //gets hourly from annual

        return Number(hourly.toFixed(2));
    }
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
        let salaryType = null;
        switch (getChoice) {
            case "1":
                salaryChoice = prompt("Your hourly salary in RM is:");
                hourly = salaryChoice;
                monthlySalary = getMonthly(hourly);
                annualSalary = getAnnual(monthlySalary);
                break;
            case "2":
                salaryChoice = prompt("Your monthly salary in RM is:");
                salaryType = "monthly";
                hourly = getHourly(salaryChoice, salaryType);
                monthlySalary = salaryChoice;
                annualSalary = getAnnual(monthlySalary);
                break;
            case "3":
                salaryChoice = prompt("Your annual salary in RM is:");
                salaryType = "yearly";
                hourly = getHourly(salaryChoice, salaryType);
                monthlySalary = getMonthly(hourly);
                annualSalary = salaryChoice;
                break;
            default:
                alert("Not a valid choice!");
        }

        hourlyView.textContent = `Hourly: RM ${hourly}`;
        monthlyView.textContent = `Monthly: RM ${monthlySalary}`;
        annualView.textContent = `Annual: RM ${annualSalary}`;
    });

}

salaryCalculator();