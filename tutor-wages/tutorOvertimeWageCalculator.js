// function tutorOvertimeWageCalculator(timeSheet, level){
//     let timeSheetList = timeSheet.split('-');
//     const overTimeList = timeSheetList.slice(5);
//     let wage = 0;

//     if(level === 1){
//         let overTimeWage = 0;
//         overTimeList.forEach(hour =>{
//             overTimeWage += (Number(hour) * 75);
//         })
//         wage = overTimeWage + ((overTimeWage/100 ) * 7);
//     }
//     else if(level === 2){
//         let overTimeWage2 = 0;
//         overTimeList.forEach(hour =>{
//             overTimeWage2 += (Number(hour) * 90);
//         })
//         wage = overTimeWage2 + ((overTimeWage2/100 ) * 9);
//     }
//     else if(level === 3){
//         let overTimeWage3 = 0;
//         overTimeList.forEach(hour =>{
//             overTimeWage3 += (Number(hour) * 105);
//         })
//         wage = overTimeWage3 + ((overTimeWage3/100 ) * 12);
//     }

//     return wage;
// }