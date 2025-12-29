const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";
const tokenKey = "quizzera_token";

const getToken = () => localStorage.getItem(tokenKey);

export const apiClient = {
  setToken(token) {
    localStorage.setItem(tokenKey, token);
  },
  clearToken() {
    localStorage.removeItem(tokenKey);
  },
  async request(path, { method = "GET", body } = {}) {
    const headers = { "Content-Type": "application/json" };
    const token = getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    const response = await fetch(`${baseUrl}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined
    });
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    return response.json().catch(() => ({}));
  },
  post(path, payload) {
    return this.request(path, { method: "POST", body: payload });
  },
  put(path, payload) {
    return this.request(path, { method: "PUT", body: payload });
  }
};
