const ENV = "local"
export const ROOT = "/portfolio"
export const API_BASE_URL = ENV == "prod" ? 'https://bpaternostro.site/portfolio' : "http://localhost:8000/portfolio";
export const API_ENDPOINTS = {
  getPerson: `${API_BASE_URL}/api/person/1`,
  postReaction: `${API_BASE_URL}/api/post`,
  postMessage: `${API_BASE_URL}/api/message/`,
  portfolioUrl: `${API_BASE_URL}:8000`,
  // Add more endpoints as needed
};