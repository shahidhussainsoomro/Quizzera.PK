import { useState } from "react";
import { apiClient } from "../services/api.js";

export default function McqImportForm() {
  const [payloadType, setPayloadType] = useState("csv");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await apiClient.post("/mcqs/bulk-import", { type: payloadType });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        Upload type
        <select
          className="form__select"
          value={payloadType}
          onChange={(event) => setPayloadType(event.target.value)}
        >
          <option value="csv">CSV</option>
          <option value="excel">Excel</option>
          <option value="json">JSON</option>
        </select>
      </label>
      <label className="form__label">
        Notes
        <textarea
          className="form__textarea"
          placeholder="Add instructions for reviewers"
          rows={3}
        />
      </label>
      <button className="primary" type="submit">
        Start Import
      </button>
    </form>
  );
}
