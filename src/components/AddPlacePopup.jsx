import PopupWithForm from "./PopupWithForm";
import {useState} from "react";

export default function AddPlacePopup(props) {
  
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  
  function handleChangeName(ev) {
    setName(ev.target.value);
  }
  
  function handleChangeLink(ev) {
    setLink(ev.target.value)
  }
  
  function handleSubmit(ev) {
    ev.preventDefault();
    props.onAddPlace({name, link})
  }
  
  return (
    <PopupWithForm isOpen={props.isOpen}
                   onClose={props.onClose}
                   name={'add'}
                   title={'Новое место'}
                   buttonText={'Создать'}
                   onSubmit={handleSubmit}>

      <>
        <div className="popup__field-container">
          <input value={name} onChange={handleChangeName} id="cardNameInput" className="popup__field" type="text" name="name" minLength="2" maxLength="30"
                 placeholder="Название" required />
          <span id="cardNameInput-error" className="popup__error popup__error_visible"></span>
        </div>
        <div className="popup__field-container">
          <input value={link} onChange={handleChangeLink} id="linkInput" className="popup__field" type="url" name="link" maxLength="1000"
                 placeholder="Ссылка на картинку" required />
          <span id="linkInput-error" className="popup__error popup__error_visible"></span>
        </div>
      </>

    </PopupWithForm>
  )
}