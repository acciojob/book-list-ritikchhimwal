//your JS code here. If required.
// Function to add a new book to the list
document.getElementById('book-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Create a new row in the table
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    // Add columns to the row
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    // Append the row to the table body
    list.appendChild(row);

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});

// Function to remove a book from the list
document.getElementById('book-list').addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove(); // Remove the entire row
    }
});
