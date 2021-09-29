import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import MainMenu from "./components/MainMenu";
import BookList from "./components/BookList";
import {useState} from "react";

function App() {

    // Тестовые данные
    if (!localStorage.getItem('booklist')) {
        localStorage.setItem('booklist', JSON.stringify([
            {author: 'Максим Дорофеев', title: 'Путь джедая', cover: 'https://simg.marwin.kz/media/catalog/product/cache/550cf8d20d514ab5650dc2adb71f19c7/6/0/6005527947.jpg'},
            {author: 'Бахытжан Бухарбай', title: 'Настольная книга казахского бизнесмена', cover: 'https://simg2.marwin.kz/media/catalog/product/cache/550cf8d20d514ab5650dc2adb71f19c7/5/5/555_1_5.jpg'},
        ]));
    };

    const fetchBookList = JSON.parse(localStorage.getItem('booklist')) || [];
    const [bookList, setBookList] = useState(
        fetchBookList.map((item,key) => {
            return {
                ...item,
                id: key
            }
        })
    )

    let [selectedBook, setEditFormVisibility] = useState({});

    function deleteItem(book) {
        let newBookList = bookList.filter(item => item.title !== book.title);
        setBookList(newBookList);
    }

    function openEditForm(book) {
        setEditFormVisibility(book);
    }

    function closeForm(e) {
        e.preventDefault();
        setEditFormVisibility({});
    }

    function submitForm(book) {
        bookList[book.id] = {
            id: book.id,
            author: book.author,
            title: book.title,
            cover: book.cover
        };
        setBookList(bookList);
        setEditFormVisibility({});
    }

  return (
    <div className="App">
        <Form
            book = {selectedBook}
            closeForm = {closeForm}
            submitForm = {submitForm}
        />
      <MainMenu/>
      <BookList
        books = {bookList}
        onDeleteItem={deleteItem}
        onEditItem={openEditForm}

      />
    </div>

      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
  );
}

export default App;
