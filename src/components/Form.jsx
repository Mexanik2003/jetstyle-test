import React, {useEffect, useState} from 'react';
import './Form.css'

const Form = function (props) {

    function onChangeAuthor(e) {
        setAuthor(e.target.value);
    }

    function onChangeTitle(e) {
        setTitle(e.target.value);
    }

    function onChangeCover(e) {
        setCover(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.submitForm({
            id: props.book.id,
            author,
            title,
            cover
        })
    }
    let [author, setAuthor] = useState('')
    let [title, setTitle] = useState('')
    let [cover, setCover] = useState('')
    let isVisible = props.book.title ? "form-popup form-popup_visible" : "form-popup";

    useEffect(() => {
        setAuthor(props.book.author);
        setTitle(props.book.title);
        setCover(props.book.cover);
    }, [props.book]);

        return (
            <div className={isVisible} >
                <form className="form-popup-content" onSubmit={handleSubmit}>
                    <input type="text" className="form-popup__input" name="author" value={author} placeholder="Автор" onChange={onChangeAuthor}/>
                    <input type="text" className="form-popup__input"  name="title" value={title} placeholder="Наименование*" onChange={onChangeTitle} required/>
                    <input type="text" className="form-popup__input"  name="cover" value={cover} placeholder="URL обложки" onChange={onChangeCover}/>
                    <div>
                        <button className="form-popup__submit" type="submit">Сохранить</button>
                        <button className="form-popup__close" onClick={props.closeForm}>Закрыть</button>
                    </div>
                </form>
            </div>
        )


}

export default Form;