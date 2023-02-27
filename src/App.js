
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";
import {useState} from "react";

function App() {

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }
  
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  return (
    <body className="page">

    <Header />

    <Main onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick} />

    <Footer />

    <PopupWithForm isOpen={isEditProfilePopupOpen}
                   onClose={closeAllPopups}
                   name={'edit'}
                   title={'Редактировать профиль'}
                   children={(
                     <>
                       <div className="popup__field-container">
                         <input id="nameInput" className="popup__field" type="text" name="name" minLength="2" maxLength="40"
                                placeholder="Введите имя" required />
                         <span id="nameInput-error" className="popup__error"></span>
                       </div>
                       <div className="popup__field-container">
                         <input id="jobInput" className="popup__field" type="text" name="job" minLength="2" maxLength="200"
                                placeholder="Введите профессию" required />
                         <span id="jobInput-error" className="popup__error"></span>
                       </div>
                       <input className="popup__save-button" type="submit" name="save" value="Сохранить" />
                     </>
                   )}/>

    <PopupWithForm isOpen={isAddPlacePopupOpen}
                   onClose={closeAllPopups}
                   name={'add'}
                   title={'Новое место'}
                   children={(
                     <>
                       <div className="popup__field-container">
                         <input id="cardNameInput" className="popup__field" type="text" name="name" minLength="2" maxLength="30"
                                placeholder="Название" required />
                         <span id="cardNameInput-error" className="popup__error popup__error_visible"></span>
                       </div>
                       <div className="popup__field-container">
                         <input id="linkInput" className="popup__field" type="url" name="link" maxLength="1000"
                                placeholder="Ссылка на картинку" required />
                         <span id="linkInput-error" className="popup__error popup__error_visible"></span>
                       </div>
                       <input className="popup__save-button popup__save-button_invalid" type="submit" name="save" value="Создать" disabled />
                     </>
                   )} />

    <PopupWithForm isOpen={''}
                   onClose={closeAllPopups}
                   name={'delete'}
                   title={'Вы уверены?'}
                   children={(
                     <input className="popup__save-button" type="submit" name="delete" value="Да" />
                   )} />

    <PopupWithForm isOpen={isEditAvatarPopupOpen}
                   onClose={closeAllPopups}
                   name={'avatar'}
                   title={'Обновить аватар'}
                   children={(
                     <>
                       <div className="popup__field-container">
                         <input id="avatarInput" className="popup__field" type="url" name="avatar" maxLength="1000"
                                placeholder="Ссылка на картинку" required />
                         <span id="avatarInput-error" className="popup__error popup__error_visible"></span>
                       </div>
                       <input className="popup__save-button" type="submit" name="save" value="Сохранить" />
                     </>
                   )} />

    <ImagePopup />


    <template className="card-template">
      <li className="element">
        <img className="element__image" src="#" alt="" />
          <div className="element__info">
            <h2 className="element__title"></h2>
            <div>
              <button className="element__like" type="button"></button>
              <p className="element__likes"></p>
            </div>
          </div>
          <button className="element__delete" type="button"></button>
      </li>
    </template>

    </body>
  );
}

export default App;
