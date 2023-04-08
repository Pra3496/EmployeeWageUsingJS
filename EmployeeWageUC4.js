const NoOfWorkingDays = 20;
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


    var wagePerHr = 20;
    let totalEmpHrs = 0;

    for(let day = 0; day<NoOfWorkingDays; day++)
    {
        let empCheck1 = Math.floor(Math.random()*10)%3;
        totalEmpHrs += getWorkingHours(empCheck1);
    }

    let empWage = totalEmpHrs * wagePerHr;
    console.log(NoOfWorkingDays);
    console.log(empWage);
    console.log(totalEmpHrs);
}