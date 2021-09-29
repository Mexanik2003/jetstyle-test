import './App.css';
import Form from "./components/Form";
import MainMenu from "./components/MainMenu";
import BookList from "./components/BookList";
import {useState} from "react";

function App() {

    const fetchBookList = JSON.parse(localStorage.getItem('booklist')) || [];

    // Добавляем в свойства книги её id, для возможности редактирования
    const [bookList, setBookList] = useState(
        fetchBookList.map((item,key) => {
            return {
                ...item,
                id: key
            }
        })
    )

    let [selectedBook, setEditFormVisibility] = useState({});

    function updateBookList(newBookList) {
        setBookList(newBookList);

        // Вырезаем из объекта книги свойство id, ненужное для хранения
        localStorage.setItem('booklist', JSON.stringify(
            newBookList.map(item => {
                return {
                    author: item.author,
                    title: item.title,
                    cover: item.cover
                }
            })
        ));
    }

    function deleteItem(book) {
        let newBookList = bookList.filter(item => item.title !== book.title);
        updateBookList(newBookList);
    }

    function openEditForm(book) {
        setEditFormVisibility(book);
    }

    function closeForm(e) {
        e.preventDefault();
        setEditFormVisibility({});
    }

    function submitForm(book) {
        // -1 - если новая книга
        if (book.id === -1) {
            bookList.push({
                id: book.id,
                author: book.author,
                title: book.title,
                cover: book.cover
            })
        } else {
            bookList[book.id] = {
                id: book.id,
                author: book.author,
                title: book.title,
                cover: book.cover
            };
        }
        updateBookList(bookList);
        setEditFormVisibility({});
    }

    function fillTestData() {
        const testBookList = [
            {author: 'Максим Дорофеев', title: 'Путь джедая', cover: 'https://simg.marwin.kz/media/catalog/product/cache/550cf8d20d514ab5650dc2adb71f19c7/6/0/6005527947.jpg'},
            {author: 'Бахытжан Бухарбай', title: 'Настольная книга казахского бизнесмена', cover: 'https://simg2.marwin.kz/media/catalog/product/cache/550cf8d20d514ab5650dc2adb71f19c7/5/5/555_1_5.jpg'},
            {author: 'Сергей Есин', title: 'Опись имущества одинокого человека', cover: 'https://simg.marwin.kz/media/catalog/product/cache/550cf8d20d514ab5650dc2adb71f19c7/c/o/cover1__w600_22_256.jpg'},
        ];
        updateBookList(
            testBookList.map((item,key) => {
                return {
                    ...item,
                    id: key
                }
            })
        );
    }

  return (
    <div className="App">
        <Form
            book = {selectedBook}
            closeForm = {closeForm}
            submitForm = {submitForm}
        />
      <MainMenu
        onPressAddBook = {openEditForm}
        onFillTestData = {fillTestData}
      />
      <BookList
        books = {bookList}
        onDeleteItem={deleteItem}
        onEditItem={openEditForm}

      />
    </div>
  );
}

export default App;
