// Variables

let genre = 'mystery';

document.getElementById('submit-buton').addEventListener('click', function(){
    
})


function appendBookToDom(title, author, cover) {
    const titleH1 = document.createElement('h3');
    titleH1.textContent = title;
    document.querySelector('#display-book').append(title);

    const coverImg = document.createElement('img');
    coverImg.setAttribute('src', `${cover}`);
    coverImg.setAttribute('alt', `${title} cover`);
    document.querySelector('#display-book').append(coverImg);

    const authorDiv = document.createElement('div');
    authorDiv.textContent = author;
    document.querySelector('display-book').append(author);
}

// Functions

const fetchBook = (genre) => {
    fetch(`http://openlibrary.org/subjects/${genre}.json`)
    .then(response => response.json())
    .then((json) => {
    // console.log(json);
    const randomBook = getRandomBook(json.works);

    const title = randomBook.title;
    const author = getAuthor(randomBook);
    const cover = `http://covers.openlibrary.org/b/id/${randomBook.cover_id}-M.jpg`;

    appendBookToDom(title, author, cover);
    })
}
const getRandomBook = (books) => {
    const randomIndex = Math.floor(Math.random() * books.length)
    return books[randomIndex];
}

function getAuthor(book) {
    // TODO get multiple authors
    return book.authors[0].name;
}


// Function called
// The problem here is that appendBookToDom will start working
// long before fetchBook is done

//const book = appendBookToDom(book);
fetchBook(genre)
