
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
    <PopupWithForm isOpen={isEditProfilePopupOpen} name={'edit'} title={'Редактировать профиль'} children=''/>
    <PopupWithForm isOpen={isAddPlacePopupOpen} name={'add'} title={'Новое место'} children='' />
    <PopupWithForm isOpen={''} name={'delete'} title={'Вы уверены?'} children='' />
    <PopupWithForm isOpen={isEditAvatarPopupOpen} name={'avatar'} title={'Обновить аватар'} children='' />
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
