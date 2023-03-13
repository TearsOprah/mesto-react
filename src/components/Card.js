import React, {useContext} from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
export default function Card(props) {

  const currentUser = React.useContext(CurrentUserContext)

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `element__like ${isLiked && 'element__like_active'}`
  );


  function handleCardClick() {
    props.onCardClick(props.card)
  }

  return (
    <li className={"element"}>
      <img onClick={handleCardClick} className="element__image" src={props.card.link} alt={props.card.name} />
      <div className="element__info">
        <h2 className="element__title">{props.card.name}</h2>
        <div>
          <button className={cardLikeButtonClassName} type="button"></button>
          <p className="element__likes">{props.card.likes.length}</p>
        </div>
      </div>
      {isOwn && <button className="element__delete" type="button"></button>}
    </li>
  )
}