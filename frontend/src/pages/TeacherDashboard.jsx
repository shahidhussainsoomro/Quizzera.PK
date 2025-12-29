import { useState } from "react";
import ProfileForm from "../components/ProfileForm.jsx";
import { apiClient } from "../services/api.js";

const teacherActions = [
  "Create assignments and exams",
  "Manage classes and groups",
  "Review student progress"
];

export default function TeacherDashboard() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleProfileSubmit = async (payload) => {
    setIsSubmitting(true);
    setStatus("");
    try {
      await apiClient.put("/teacher/profile", payload);
      setStatus("Profile updated successfully.");
    } catch (error) {
      setStatus("Unable to update profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="dashboard__section">
      <h2>Teacher Dashboard</h2>
      <p>Plan lessons, create assessments, and monitor cohorts.</p>
      <ul className="list">
        {teacherActions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
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
