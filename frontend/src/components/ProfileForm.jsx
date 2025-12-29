export default function ProfileForm({ title }) {
  return (
    <form className="form">
      <h3 className="form__title">{title}</h3>
      <div className="form__row">
        <label className="form__label">
          Full name
          <input className="form__input" name="fullName" required />
        </label>
        <label className="form__label">
          Email
          <input className="form__input" name="email" type="email" required />
        </label>
      </div>
      <div className="form__row">
        <label className="form__label">
          Phone
          <input className="form__input" name="phone" placeholder="+92..." />
        </label>
        <label className="form__label">
          Locale
          <select className="form__select" name="locale">
            <option value="en">English</option>
            <option value="ur">Urdu</option>
          </select>
        </label>
      </div>
      <label className="form__label">
        Bio
        <textarea
          className="form__textarea"
          name="bio"
          rows={3}
          placeholder="Share a short profile summary"
        />
      </label>
      <div className="form__actions">
        <button className="secondary" type="button">
          Reset
        </button>
        <button className="primary" type="submit">
          Save Profile
        </button>
      </div>
    </form>
  );
}
