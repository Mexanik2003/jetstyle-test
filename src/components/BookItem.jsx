import React from 'react';
import './BookItem.css';
const BookItem = function (props) {
    const alt = `${props.book.author} - ${props.book.title}`;

    return (
        <a className="book-item">
            <img className="book-item__cover" alt={alt} src={props.book.cover} />
            <div className="book-item-descr">
                <h2 className="book-item__title">{props.book.title}</h2>
                <div className="book-item-text">
                    <p className="book-item__author">{props.book.author}</p>
                </div>
            </div>
            <div className="book-item-buttons">
                <button className="book-item__editbtn" onClick={() => props.onEdit(props.book)}>Редактировать</button>
                <button className="book-item__delbtn" onClick={() => props.onDelete(props.book)}>Удалить</button>
            </div>
        </a>
    )


}

export default BookItem;