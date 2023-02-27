export default function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__image-container">
        <img className="popup__image" src="images/element-card-1.jpeg" alt="" />
        <p className="popup__description">Description</p>
        <button className="popup__closer hovered-link popup__closer_type_image" type="button"
                aria-label="Закрыть"></button>
      </div>
    </div>
  )
}