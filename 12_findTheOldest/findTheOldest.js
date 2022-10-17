const findTheOldest = function(people) {
    let array = people;
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    };
    return death - birth;
};

    /*const today = new Date();
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
    const oldest = array.reduce(
        (array[prev], array[curr]) => {
            array[x].age > array[y].age ? (array[prev] = array[x]) : (array[prev] = array[y])
        }
        array[0],
    );
*/
// Do not edit below this line
module.exports = findTheOldest;
