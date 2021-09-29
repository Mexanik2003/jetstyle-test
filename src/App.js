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
    const [bookList, setBookList] = useState(JSON.parse(localStorage.getItem('booklist')))
    //console.log(bookList)

    function deleteItem(e) {
        console.log(e);
        let newBookList = bookList.filter(book => book.title !== e.title);
        setBookList(newBookList);
    }

  return (
    <div className="App">
      <Form/>
      <MainMenu/>
      <BookList
        books = {bookList}
        onDeleteItem={deleteItem}

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
