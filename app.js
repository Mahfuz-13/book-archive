// Fecth the data after clicking the button
const searchBook = ()=>{
    const input = document.getElementById('input');
    const inputValue = input.value;

    // Clear Input Box
    input.value = '';

    // Getting the URL and then fethcing it
    const url = `https://openlibrary.org/search.json?q=${inputValue}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaySearchResult(data));
}



// Showing The data 
const displaySearchResult = books =>{
    const searchResult = document.getElementById('div');

    // Cleaning the searchResult area
    searchResult.innerHTML = '';
    const total = document.getElementById('total-result');
    total.innerText = books.numFound;

    // When no search result found
    if(Object.keys(books.docs).length === 0){
        searchResult.classList.add('text-center');
        searchResult.innerHTML = `
        <h1> No Result Found </h1>
        `
    }
    
    
    // Looping the books using forEach
    books.docs.forEach(book=>{
        const div = document.createElement('div');

        // Adding a class in div
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title"> Name: ${book.title}</h4>
                <h6 class="card-title"> Author Name: ${book.author_name}</h6>
                <h6 class="card-title"> Publisher Name: ${book.publisher}</h6>
                <h6 class="card-title"> First Published: ${book.first_publish_year}</h6>
            </div>
        </div>
        `

        // Appending the div to searchResult area
        searchResult.appendChild(div);
    })
}