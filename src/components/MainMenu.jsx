import React from 'react';
import './MainMenu.css';

const MainMenu = function (props) {

    function handlePressAddBook() {
        props.onPressAddBook({
            id: -1,
            author: "",
            title: "",
            cover: ""
        });
    }
    return (
        <div>
            <button className="main-menu__btn" onClick={handlePressAddBook}>Добавить книгу</button>
            <button className="main-menu__btn" onClick={props.onFillTestData}>Тестовые данные</button>
        </div>
    )
}

export default MainMenu;