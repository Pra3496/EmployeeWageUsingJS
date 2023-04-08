function calculateDailyWage(empHrs)
{
    return empHrs * wagePerHr;
}


const MaxHrsInMonth = 160;
const NoOfWorkingDays = 20;
var wagePerHr = 20;
let totalEmpHrs = 0;
let totalWorkingDays=0;
let empDailyWageArr = new Array();

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
{
    function getWorkingHours(empCheck)
    {
        switch(empCheck)
        {
            case IS_PART_TIME: 
                return PART_TIME_HOURS;
                break;
            
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
                break;
            default: return 0;
        }
    }

    while(totalEmpHrs <=MaxHrsInMonth && totalWorkingDays < NoOfWorkingDays)
    {
        totalWorkingDays++;
        let empCheck1 = Math.floor(Math.random()*10)%3;

        totalEmpHrs+= getWorkingHours(empCheck1);
        empDailyWageArr.push(calculateDailyWage(getWorkingHours(empCheck1)));

    }

    let empWage = calculateDailyWage(totalEmpHrs);

   console.log("Employee Array : "+empDailyWageArr.join(" "));

    console.log(totalWorkingDays);
    console.log(empWage);
    console.log(totalEmpHrs);
}

// UC-7

let totalEmpWage = 0;

function sum(dailyWage)
{
    totalEmpWage+=dailyWage;
}

empDailyWageArr.forEach(sum);

console.log(empDailyWageArr);
console.log(totalWorkingDays);
console.log(totalEmpHrs);
console.log(empWage);

function totalWage(totalWage,dailyWage)
{
    return totalWage + dailyWage;
}

console.log("Employee Wage reduce Array : "+empDailyWageArr.reduce(totalWage));