import React, {useEffect, useState} from 'react';
import './Form.css'

const Form = function (props) {

    function onChangeAuthor(e) {
        setAuthor(e.target.value);
    }

    function onChangeTitle(e) {
        setTitle(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.submitForm({
            id: props.book.id ? props.book.id : -1,
            author,
            title,
            cover
        })
    }

    function imageUpload(e) {
        const file = e.target.files[0];
        getBase64(file).then(base64 => {
            setCover(base64)
            //localStorage["fileBase64"] = base64;
            //console.log("file stored",base64);
        });
    }

    function getBase64(file) {
        return new Promise((resolve,reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    }

    let [author, setAuthor] = useState('')
    let [title, setTitle] = useState('')
    let [cover, setCover] = useState('')
    let isVisible = props.book.id >= -1 ? "form-popup form-popup_visible" : "form-popup";

    useEffect(() => {
        setAuthor(props.book.author);
        setTitle(props.book.title);
        setCover(props.book.cover);
    }, [props.book]);

    return (
        <div className={isVisible} >
            <form className="form-popup-content" onSubmit={handleSubmit}>
                <input type="text" className="form-popup__input" name="author" value={author || ""} placeholder="Автор" onChange={onChangeAuthor}/>
                <input type="text" className="form-popup__input"  name="title" value={title || ""} placeholder="Наименование*" onChange={onChangeTitle} required/>
                <input type="file" className="form-popup__input"  id="imageFile" name='imageFile' onChange={imageUpload} placeholder="Обложка"/>
                <div>
                    <button className="form-popup__submit" type="submit">Сохранить</button>
                    <button className="form-popup__close" onClick={props.closeForm}>Закрыть</button>
                </div>
            </form>
        </div>
    )
}

export default Form;