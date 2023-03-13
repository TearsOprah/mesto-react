import PopupWithForm from "./PopupWithForm";
import React from "react";

export default function EditAvatarPopup(props) {

  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value /* Значение инпута, полученное с помощью рефа */,
    });
  }

  return (
    <PopupWithForm  isOpen={props.isOpen}
                    onClose={props.onClose}
                    name={'avatar'}
                    title={'Обновить аватар'}
                    buttonText={'Сохранить'}
                    onSubmit={handleSubmit}>

      <div className="popup__field-container">
        <input id="avatarInput" className="popup__field" type="url" name="avatar" maxLength="1000"
               placeholder="Ссылка на картинку" required ref={avatarRef}/>
        <span id="avatarInput-error" className="popup__error popup__error_visible"></span>
      </div>

    </PopupWithForm>
  )
}