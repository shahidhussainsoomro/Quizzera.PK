import { apiClient } from "../services/api.js";

export default function UserManagementForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await apiClient.post("/admin/users", Object.fromEntries(formData));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
      <label className="form__label">
        Role
        <select className="form__select" name="role">
          <option value="Admin">Admin</option>
          <option value="Teacher">Teacher</option>
          <option value="Mentor">Mentor</option>
          <option value="Student">Student</option>
          <option value="Institution">Institution</option>
        </select>
      </label>
      <button className="primary" type="submit">
        Invite User
      </button>
    </form>
  );
}
