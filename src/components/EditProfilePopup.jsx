import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup(props) {
  return (
    <PopupWithForm isOpen={props.isOpen}
                   onClose={props.onClose}
                   name={'edit'}
                   title={'Редактировать профиль'}
                   buttonText={'Сохранить'}>

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
      </>

    </PopupWithForm>
  )
}