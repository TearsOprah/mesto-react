import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props) {
  return (
    <PopupWithForm isOpen={props.isOpen}
                   onClose={props.onClose}
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
  )
}