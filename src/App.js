
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

  function handleCardClick(card) {
    setSelectedCard(card)
    setIsImagePopupOpen(true)
  }
  
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsImagePopupOpen(false)
    setSelectedCard({})
  }

  const [selectedCard, setSelectedCard] = useState({})
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  return (
    <body className="page">

    <Header />

    <Main onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}/>

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

    <ImagePopup card={selectedCard}
                onClose={closeAllPopups}
                isOpen={isImagePopupOpen}/>

    </body>
  );
}

export default App;
