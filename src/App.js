
import avatarPath from './images/profile-avatar.jpeg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <body className="page">
    <Header />
    <Main />
    <Footer />

    <div className="popup popup_type_edit">
      <div className="popup__container">
        <form className="popup__form" name="edit-form" noValidate>
          <h2 className="popup__title">Редактировать профиль</h2>
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
        </form>
        <button className="popup__closer hovered-link popup__closer_type_edit" type="button"
                aria-label="Закрыть"></button>
      </div>
    </div>

    <div className="popup popup_type_add">
      <div className="popup__container">
        <form className="popup__form" name="add-form" noValidate>
          <h2 className="popup__title">Новое место</h2>
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
          <input className="popup__save-button popup__save-button_invalid" type="submit" name="save" value="Создать"
                 disabled />
        </form>
        <button className="popup__closer hovered-link popup__closer_type_add" type="button"
                aria-label="Закрыть"></button>
      </div>
    </div>

    <div className="popup popup_type_delete">
      <div className="popup__container">
        <form className="popup__form" name="delete-form" noValidate>
          <h2 className="popup__title">Вы уверены?</h2>
          <input className="popup__save-button" type="submit" name="delete" value="Да" />
        </form>
        <button className="popup__closer hovered-link popup__closer_type_delete" type="button"
                aria-label="Закрыть"></button>
      </div>
    </div>

    <div className="popup popup_type_image">
      <div className="popup__image-container">
        <img className="popup__image" src="images/element-card-1.jpeg" alt="" />
          <p className="popup__description">Description</p>
          <button className="popup__closer hovered-link popup__closer_type_image" type="button"
                  aria-label="Закрыть"></button>
      </div>
    </div>

    <div className="popup popup_type_avatar">
      <div className="popup__container">
        <form className="popup__form" name="avatar-form" noValidate>
          <h2 className="popup__title">Обновить аватар</h2>
          <div className="popup__field-container">
            <input id="avatarInput" className="popup__field" type="url" name="avatar" maxLength="1000"
                   placeholder="Ссылка на картинку" required />
              <span id="avatarInput-error" className="popup__error popup__error_visible"></span>
          </div>
          <input className="popup__save-button" type="submit" name="save" value="Сохранить" />
        </form>
        <button className="popup__closer hovered-link popup__closer_type_edit" type="button"
                aria-label="Закрыть"></button>
      </div>
    </div>

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
