export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}` + (props.isOpen && ' popup_opened')}>
      <div className="popup__container">
        <form className="popup__form" name={`${props.name}-form`} noValidate>
          <h2 className="popup__title">{props.title}</h2>
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
  )
}