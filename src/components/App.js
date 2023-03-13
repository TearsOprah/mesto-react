import api from "../utils/api";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {useEffect, useState} from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {

  const [cards, setCards] = useState([])

  function handleCardDelete(card) {
    const cardId = card._id;
    api.deleteCard(cardId)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== cardId))
      })
      .catch(err => {
        console.log(err)
      })
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.toggleLike(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
      .catch(err => {
        console.log(err)
      });
  }

  const [currentUser, setCurrentUser] = useState({})
  useEffect(() => {
    api.getUserData()
      .then(res => {
        setCurrentUser(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

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

  function handleUpdateUser(data) {
    api.setUserData(data)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err)
      })
  }

  const [selectedCard, setSelectedCard] = useState({})
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  return (

    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">

        <Header />


        <Main onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              cards={cards}
              setCards={setCards}
        />


        <Footer />

        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

        <PopupWithForm isOpen={isAddPlacePopupOpen}
                       onClose={closeAllPopups}
                       name={'add'}
                       title={'Новое место'}
                       buttonText={'Создать'}>

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
          </>

        </PopupWithForm>


        <PopupWithForm isOpen={''}
                       onClose={closeAllPopups}
                       name={'delete'}
                       title={'Вы уверены?'}
                       buttonText={'Сохранить'}>

          <input className="popup__save-button" type="submit" name="delete" value="Да" />

        </PopupWithForm>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

        <ImagePopup card={selectedCard}
                    onClose={closeAllPopups}
                    isOpen={isImagePopupOpen}/>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
