const getTheTitles = function(books) {
    let bookArr = books;
    let titles = bookArr.map((book) => {
        return book.title;
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
