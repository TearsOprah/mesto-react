import avatarPath from "../images/profile-avatar.jpeg";
import {useEffect, useState} from "react";
import api from "../utils/api";

export default function Main(props) {

  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')

  useEffect(() => {
    api.getUserData()
      .then(res => {
        setUserAvatar(res.avatar)
        setUserDescription(res.about)
        setUserName(res.name)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__block">
          <div className="profile__avatar-edit">
            <img className="profile__avatar" src={userAvatar} alt="аватар" />
            <button onClick={props.onEditAvatar} className="profile__avatar-button" type="button" aria-label="Обновить аватар"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button onClick={props.onEditProfile} className="profile__edit-button hovered-link" type="button" aria-label="Редактировать"></button>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} className="profile__add-button hovered-link" type="button" aria-label="Добавить"></button>
      </section>
      <section className="elements">
        <ul className="elements__list">

        </ul>
      </section>
    </main>
  )
}