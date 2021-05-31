function checkShift(useremail, dateSubmitted) {
    let scheduleSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Schedule");
    let dateArray = scheduleSheet.getRange(2, 3, scheduleSheet.getLastRow()).getValues().flat();
    let employeeArray = scheduleSheet.getRange(2, 2, scheduleSheet.getLastRow()).getValues().flat();
    let sameShiftArray = [];

    for(let i = 0; i < dateArray.length; i++) {
        if (dateArray[i] == dateSubmitted) {
            sameShiftArray.push(employeeArray[i]);
        }
    }

    return sameShiftArray;
}
