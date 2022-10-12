const findTheOldest = function(people) {
    let array = people;
    const today = newDate();
    const year = today.getFullYear();
    array.forEach(function (element) {
        if (array.yearOfDeath == undefined) {
            element.age = (year - element.yearOfBirth);
        }
        else {
            element.age = (element.yearOfDeath - element.yearOfBirth);
        };
    });
    
};

// Do not edit below this line
module.exports = findTheOldest;
