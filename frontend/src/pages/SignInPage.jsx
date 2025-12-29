import { useState } from "react";
import { apiClient } from "../services/api.js";

export default function SignInPage() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setIsSubmitting(true);
    setStatus("");
    try {
      const response = await apiClient.post(
        "/auth/login",
        Object.fromEntries(formData)
      );
      if (response?.access_token) {
        apiClient.setToken(response.access_token);
      }
      setStatus("Signed in successfully.");
    } catch (error) {
      setStatus("Unable to sign in. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="site-section">
      <div className="auth-card">
        <h1>Welcome back</h1>
        <p>Sign in to manage assessments and track learner progress.</p>
        <form className="form" onSubmit={handleSubmit}>
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
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
          {status ? <p className="form__status">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}
