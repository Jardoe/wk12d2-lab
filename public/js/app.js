
const handleFormSubmit = function(event){
  event.preventDefault();
  const inputTitle = this.title.value;
  const inputAuthor = this.author.value;
  const inputCategory = this.category.value;
  const inputSelect = this.genre.value;

  // document.querySelector('input[name="category"]:checked').value;
  const valuesToValidate = [inputAuthor, inputTitle]
  if (areAnyValuesEmpty(valuesToValidate)) return;

  const book = {title: inputTitle, author: inputAuthor, category: inputCategory, genre: inputSelect }
  addBook(book);
  event.target.reset();
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

const areAnyValuesEmpty = function (values) {
  return values.some((value) => value === "");
}

const deleteAll = function(event){
  const list = document.querySelector('#book-list')
  list.innerHTML = '';
};


document.addEventListener('DOMContentLoaded', () => {
  const deleteButton = document.querySelector('#delete-all')
  deleteButton.addEventListener('click', deleteAll)
  const form = document.querySelector('#book-form');
  const log = document.querySelector('#log');
  form.addEventListener('submit', handleFormSubmit, false);

});
