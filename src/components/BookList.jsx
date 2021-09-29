import React, {useEffect} from 'react';
import BookItem from "./BookItem";

const BookList = function (props) {
    if (props.books) {
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
            <p>Список пуст</p>
        )
    }


}

export default BookList;