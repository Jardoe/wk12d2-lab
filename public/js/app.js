
const handleFormSubmit = function(event){

  event.preventDefault();
  const inputTitle = this.title.value;
  const inputAuthor = this.author.value;
  const inputRadio = document.querySelector('input[name="category"]:checked').value;

  const inputSelect = this.genre.value;


  const book = {title: inputTitle, author: inputAuthor, category: inputRadio, genre: inputSelect }
  addBook(book);
}

const addBook = function(book){
  const container = document.querySelector('#book-list');
  const list = document.createElement('ul');
  for(property in book){
    const item = document.createElement('li');
    item.textContent = `${property}: ${book[property]}`

    list.appendChild(item);
  }
  container.appendChild(list);
}


document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#book-form');
  const log = document.querySelector('#log');
  form.addEventListener('submit', handleFormSubmit, false);

});
