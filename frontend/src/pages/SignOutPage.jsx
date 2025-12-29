import { useState } from "react";
import { apiClient } from "../services/api.js";

export default function SignOutPage() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignOut = async () => {
    setIsSubmitting(true);
    setStatus("");
    try {
      await apiClient.post("/auth/logout", {});
      apiClient.clearToken();
      setStatus("You have been signed out.");
    } catch (error) {
      setStatus("Unable to sign out right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="site-section">
      <div className="auth-card">
        <h1>Sign out</h1>
        <p>Use the button below to end your session.</p>
        <button className="primary" type="button" onClick={handleSignOut}>
          {isSubmitting ? "Signing out..." : "Sign Out"}
        </button>
        {status ? <p className="form__status">{status}</p> : null}
      </div>
    </section>
  );
}
