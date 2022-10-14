// Code your solution in this file!

 const returnFirstTwoDrivers = (driver) => [] = driver.slice(0,2)
 const returnLastTwoDrivers = (driver) => [] = driver.slice(-2)

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 function createFareMultiplier(argument){
    return function(argument){
        return (argument * argument)
    }
 }
 const fareDoubler = (fare) => (fare * 2)
 const fareTripler = (fare) => (fare * 3)

 function selectDifferentDrivers(drivers, functions){
    if (functions === returnFirstTwoDrivers){
        return [] = drivers.slice(0,2)
    } else {
        return [] = drivers.slice(-2)
    }
 }