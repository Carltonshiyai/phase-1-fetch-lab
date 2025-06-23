function fetchBooks() {
  // Return the fetch promise chain
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(jsonData => {
      renderBooks(jsonData);
      return jsonData; // Return data for tests
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

// Call fetchBooks when the page loads
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});