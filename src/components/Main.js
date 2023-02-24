import avatarPath from "../images/profile-avatar.jpeg";

export default function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__block">
          <div className="profile__avatar-edit">
            <img className="profile__avatar" src={avatarPath} alt="аватар" />
            <button className="profile__avatar-button" type="button" aria-label="Обновить аватар"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__title"></h1>
            <button className="profile__edit-button hovered-link" type="button" aria-label="Редактировать"></button>
            <p className="profile__subtitle"></p>
          </div>
        </div>
        <button className="profile__add-button hovered-link" type="button" aria-label="Добавить"></button>
      </section>
      <section className="elements">
        <ul className="elements__list">

        </ul>
      </section>
    </main>
  )
}