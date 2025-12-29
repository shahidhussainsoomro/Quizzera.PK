import { useState } from "react";
import { apiClient } from "../services/api.js";

export default function BlueprintBuilder() {
  const [sections, setSections] = useState([
    { topic: "Algebra", count: 10, difficulty: "Medium" }
  ]);

  const updateSection = (index, field, value) => {
    setSections((prev) =>
      prev.map((section, idx) =>
        idx === index ? { ...section, [field]: value } : section
      )
    );
  };

  const addSection = () => {
    setSections((prev) => [
      ...prev,
      { topic: "", count: 5, difficulty: "Easy" }
    ]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await apiClient.post("/exams/blueprints", { sections });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {sections.map((section, index) => (
        <div className="form__row" key={`${section.topic}-${index}`}>
          <label className="form__label">
            Topic
            <input
              className="form__input"
              value={section.topic}
              onChange={(event) =>
                updateSection(index, "topic", event.target.value)
              }
            />
          </label>
          <label className="form__label">
            Questions
            <input
              className="form__input"
              type="number"
              min="1"
              value={section.count}
              onChange={(event) =>
                updateSection(index, "count", Number(event.target.value))
              }
            />
          </label>
          <label className="form__label">
            Difficulty
            <select
              className="form__select"
              value={section.difficulty}
              onChange={(event) =>
                updateSection(index, "difficulty", event.target.value)
              }
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </label>
        </div>
      ))}
      <div className="form__actions">
        <button className="secondary" type="button" onClick={addSection}>
          Add Section
        </button>
        <button className="primary" type="submit">
          Save Blueprint
        </button>
      </div>
    </form>
  );
}
