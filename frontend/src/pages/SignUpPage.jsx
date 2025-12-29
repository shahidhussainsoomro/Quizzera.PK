import { useState } from "react";
import { apiClient } from "../services/api.js";

export default function SignUpPage() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setIsSubmitting(true);
    setStatus("");
    try {
      await apiClient.post("/auth/signup", Object.fromEntries(formData));
      setStatus("Account created. Check your email for next steps.");
    } catch (error) {
      setStatus("Unable to sign up. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="site-section">
      <div className="auth-card">
        <h1>Create your account</h1>
        <p>Join Quizzera.PK to access exams, MCQs, and analytics.</p>
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__label">
            Full name
            <input className="form__input" name="full_name" required />
          </label>
          <label className="form__label">
            Email
            <input className="form__input" name="email" type="email" required />
          </label>
          <label className="form__label">
            Password
            <input
              className="form__input"
              name="password"
              type="password"
              required
            />
          </label>
          <button className="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Account"}
          </button>
          {status ? <p className="form__status">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}
