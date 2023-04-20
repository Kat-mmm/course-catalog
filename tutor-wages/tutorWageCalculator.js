//create a function called tutorWageCalculator thattakes in the timesheet and the level
function tutorWageCalculator(timeSheet, level){
    //split the string by '-' and then put each number in a list
    const timeSheetList = timeSheet.split('-');
    //declare and initialize the wage to 0
    let wage = 0;

    //do a check of the level and check also if it's a valid time sheet   
    //take each hour in the list and multiply it by the amout for each level the add to the wage
    if(level === 1 && timeSheetList.length >= 5 && timeSheetList.length < 7){
        timeSheetList.forEach(hour =>{
            wage += (Number(hour) * 75);
        })
    }
    else if(level === 2 && timeSheetList.length >= 5 && timeSheetList.length < 7){
        timeSheetList.forEach(hour =>{
            wage += (Number(hour) * 90);
        })
    }
    else if(level === 3 && timeSheetList.length >= 5 && timeSheetList.length < 7){
        timeSheetList.forEach(hour =>{
            wage += (Number(hour) * 105);
        })
    }

    //return the wage
    return wage;
}