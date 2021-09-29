import React, {useEffect} from 'react';
import BookItem from "./BookItem";

const BookList = function (props) {
    // console.log(props.books)
    if (props.books.length > 0) {
        return (
            <div> {
                props.books.map(book =>
                    <BookItem
                        key={Math.random()*1000000}
                        book={book}
                        onEdit={props.onEditItem}
                        onDelete={props.onDeleteItem}
                    />
                )
            } </div>
        )
    } else {
        return (
            <div>
                <p>Список пуст</p>
            </div>
        )
    }


}

export default BookList;