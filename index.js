// Your code here
/* const x = [ 'Gray', 'Worm', 'Security', 1 ]

const emplArray = [
[ 'Thor', 'Odinsson', 'Electrical Engineer', 45 ],
[ 'Loki', 'Laufeysson-Odinsson', 'HR Representative', 35 ],
[ 'Natalia', 'Romanov', 'CEO', 150 ],
[ 'Darcey', 'Lewis', 'Intern', 15 ],
[ 'Jarvis', 'Stark', 'CIO', 125 ], 
[ 'Anthony', 'Stark', 'Angel Investor', 300 ]]; */

let arrayOfRecords = [];

//Toggling init and the data above to use own data- tests not passing
/* function init(){
    createEmployeeRecords(emplArray);
    createTimeInEvent(arrayOfRecords[0], "2021-05-31 1400");
    createTimeInEvent(arrayOfRecords[0], "2021-05-30 1400");
    createTimeInEvent(arrayOfRecords[0], "2021-05-29 1400");
    createTimeOutEvent(arrayOfRecords[0], "2021-05-31 1600");
    createTimeOutEvent(arrayOfRecords[0], "2021-05-30 1600");
    createTimeOutEvent(arrayOfRecords[0], "2021-05-29 1600");
} */

function createEmployeeRecord(x){
    //console.log(x)
    //debugger;
    const record = {
        firstName: x[0],
        familyName: x[1],
        title: x[2],
        payPerHour: x[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    //console.log(record);
    arrayOfRecords.push(record);
    //console.log(arrayOfRecords);
    return record;
} 

function createEmployeeRecords(employeesArray){
    //debugger;
    //LEFT OFF HERE -- WHAT DO I USE TO RETURN THE ARRAY OF OBJECTS FROM THIS FUNCTION TO PASS THE NEXT TEST?
    employeesArray.forEach(function (e) {
        createEmployeeRecord(e);
    });
    return arrayOfRecords;
}

function createTimeInEvent(record, dateStamp){
    const empTimeIn = {
        type: "TimeIn",
        hour: dateStamp.slice(-4),
        date: dateStamp.slice(0, 10)
    }
    //debugger;
    record.timeInEvents.push(empTimeIn)
    return record;
}

function createTimeOutEvent(record, dateStamp){
    record.timeOutEvents.push({
        type: "TimeOut",
        hour: dateStamp.slice(-4),
        date: dateStamp.slice(0, 10)
    })
    //debugger;
    return record;
}

function hoursWorkedOnDate(record, date){
    debugger;
    //how to get timeOut and timeIn based on date
    const currentDateOut = record.timeOutEvents.filter(e => e.date === date);
    const currentDateIn = record.timeInEvents.filter(e => e.date === date);

    const hoursWorked = (currentDateOut[0].hour - currentDateIn[0].hour)/100;

    return hoursWorked;
    }
    
function wagesEarnedOnDate(recordObject, date){
    //uses hoursWorkedOnDate to multiply hours by payRate
    //debugger;
    const payOwed = (hoursWorkedOnDate(recordObject, date)) * recordObject.payPerHour;
    return payOwed;
}



function allWagesFor(recordObject){
    debugger;
    //below gets array of dates 
    const datesWorkedArray = recordObject.timeInEvents.map(x => x.date);
//HELP
    //use above array to feed dates to wagesEarned on date and collect pay in an array
    const allPayOwedArray = datesWorkedArray.map((e)=> wagesEarnedOnDate(recordObject, e));
    //reduce the array
    const reducer = (a, b) => a+b;
    const allPayOwed = allPayOwedArray.reduce(reducer, 0);
    console.log(allPayOwed);
    //wagesEarnedOnDate(recordObject, this.timeOutEvents.date);
    return allPayOwed;
}

/* calculatePayroll
Argument(s)
Array of employee records
Returns
Sum of pay owed to all employees for all dates, as a number
Behavior
Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number. */
function calculatePayroll(arrayOfRecords){
    debugger;
    const payrollArray = arrayOfRecords.map(createEmployeeRecord);
    const reducer = (a, b) => a+b;
    const sumOfPayAllTimeArray = payrollArray.map(e => allWagesFor(e));
    const sumOfPayAllTime = sumOfPayAllTimeArray.reduce(reducer, 0)
    return sumOfPayAllTime
}