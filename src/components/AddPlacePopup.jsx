import PopupWithForm from "./PopupWithForm";
import {useRef, useState} from "react";
import {useEffect} from "react";

export default function AddPlacePopup(props) {
  
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const linkErrorRef = useRef();
  const nameErrorRef = useRef();
  const nameRef = useRef();
  const linkRef = useRef();

  useEffect(() => {
    if (props.isOpen) {
      // очищаем поля
      nameRef.current.value = ''
      linkRef.current.value = ''
      nameErrorRef.current.textContent = '';
      linkErrorRef.current.textContent = '';
    }
  }, [props.isOpen])

  function handleChangeName(ev) {
    setName(ev.target.value);
  }
  
  function handleChangeLink(ev) {
    setLink(ev.target.value)
  }

  function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  }
  
  function handleSubmit(ev) {
    ev.preventDefault();

    // проверяем поле имени
    if (name.length < 2 || name.length > 30) {
      nameErrorRef.current.textContent = ('Имя должно содеражать от 2 до 30 символов')
    } else {
      nameErrorRef.current.textContent = ''
    }

    // проверяем валидность link
    if (!isValidUrl(link)) {
      linkErrorRef.current.textContent = 'Введите корректный URL';
      return;
    } else {
      linkErrorRef.current.textContent = '';
    }

    props.onAddPlace({name, link})

  }

  function handleClose() {
    props.onClose()
    // очищаем поля
    nameRef.current.value = ''
    linkRef.current.value = ''
    // обнуляем ошибку после отправки формы
    linkErrorRef.current.textContent = '';
    nameErrorRef.current.textContent = '';
  }
  
  return (
    <PopupWithForm isOpen={props.isOpen}
                   onClose={handleClose}
                   name={'add'}
                   title={'Новое место'}
                   buttonText={'Создать'}
                   onSubmit={handleSubmit}>

      <>
        <div className="popup__field-container">
          <input ref={nameRef} onChange={handleChangeName} id="cardNameInput" className="popup__field" type="text" name="name" minLength="2" maxLength="30"
                 placeholder="Название" required />
          <span ref={nameErrorRef} id="cardNameInput-error" className="popup__error popup__error_visible"></span>
        </div>
        <div className="popup__field-container">
          <input ref={linkRef} onChange={handleChangeLink} id="linkInput" className="popup__field" type="url" name="link" maxLength="1000"
                 placeholder="Ссылка на картинку" required />
          <span ref={linkErrorRef} id="linkInput-error" className="popup__error popup__error_visible"></span>
        </div>
      </>

    </PopupWithForm>
  )
}