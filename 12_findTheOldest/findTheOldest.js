const findTheOldest = function(people) {
    let array = people;
    const today = new Date();
    const year = today.getFullYear();
    let ages = [];
    array.forEach(function (element) {
        if (element.yearOfDeath == undefined) {
            element.age = (year - element.yearOfBirth);
        }
        else {
            element.age = (element.yearOfDeath - element.yearOfBirth);
        };
    });
    for (i = 0; i < array.length; i++) {
        ages.push(array[i].age);
    };
    return Math.max(ages);
};

// Do not edit below this line
module.exports = findTheOldest;
