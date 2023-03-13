import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  return (
    <PopupWithForm  isOpen={props.isOpen}
                    onClose={props.onClose}
                    name={'avatar'}
                    title={'Обновить аватар'}
                    buttonText={'Сохранить'}>

      <div className="popup__field-container">
        <input id="avatarInput" className="popup__field" type="url" name="avatar" maxLength="1000"
               placeholder="Ссылка на картинку" required />
        <span id="avatarInput-error" className="popup__error popup__error_visible"></span>
      </div>

    </PopupWithForm>
  )
}