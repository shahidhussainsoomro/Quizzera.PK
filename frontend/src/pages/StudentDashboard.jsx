import { useState } from "react";
import ProfileForm from "../components/ProfileForm.jsx";
import { apiClient } from "../services/api.js";

const studentHighlights = [
  { label: "Practice sessions", value: "4" },
  { label: "Upcoming exams", value: "2" },
  { label: "Bookmarks", value: "18" }
];

export default function StudentDashboard() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleProfileSubmit = async (payload) => {
    setIsSubmitting(true);
    setStatus("");
    try {
      await apiClient.put("/student/profile", payload);
      setStatus("Profile updated successfully.");
    } catch (error) {
      setStatus("Unable to update profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="dashboard__section">
      <h2>Student Dashboard</h2>
      <p>Resume practice, review analytics, and manage goals.</p>
      <div className="pill-grid">
        {studentHighlights.map((item) => (
          <article className="pill-card" key={item.label}>
            <h3>{item.label}</h3>
            <p className="pill-card__value">{item.value}</p>
          </article>
        ))}
      </div>
      <div className="dashboard__card dashboard__card--compact">
        <ProfileForm
          title="Update Profile"
          onSubmit={handleProfileSubmit}
          status={status}
          isSubmitting={isSubmitting}
        />
      </div>
    </section>
  );
}
