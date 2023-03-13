import PopupWithForm from "./PopupWithForm";
import {useContext, useState} from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import React from "react";

export default function EditProfilePopup(props) {

  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    // Запрещаем браузеру переходить по адресу формы
    event.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm isOpen={props.isOpen}
                   onClose={props.onClose}
                   name={'edit'}
                   title={'Редактировать профиль'}
                   buttonText={'Сохранить'}
                   onSubmit={handleSubmit}>


      <>
        <div className="popup__field-container">
          <input onChange={handleChangeName} value={name || ''} id="nameInput" className="popup__field" type="text" name="name" minLength="2" maxLength="40"
                 placeholder="Введите имя" required />
          <span id="nameInput-error" className="popup__error"></span>
        </div>
        <div className="popup__field-container">
          <input onChange={handleChangeDescription} value={description || ''} id="jobInput" className="popup__field" type="text" name="job" minLength="2" maxLength="200"
                 placeholder="Введите профессию" required />
          <span id="jobInput-error" className="popup__error"></span>
        </div>
      </>

    </PopupWithForm>
  )
}