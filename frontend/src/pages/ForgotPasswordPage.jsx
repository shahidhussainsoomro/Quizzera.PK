import { useState } from "react";
import { apiClient } from "../services/api.js";

export default function ForgotPasswordPage() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setIsSubmitting(true);
    setStatus("");
    try {
      await apiClient.post(
        "/auth/forgot-password",
        Object.fromEntries(formData)
      );
      setStatus("Password reset email sent. Please check your inbox.");
    } catch (error) {
      setStatus("Unable to send reset email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="site-section">
      <div className="auth-card">
        <h1>Reset your password</h1>
        <p>Enter your email and we'll send you a reset link.</p>
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__label">
            Email
            <input className="form__input" name="email" type="email" required />
          </label>
          <button className="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send reset link"}
          </button>
          {status ? <p className="form__status">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}
