const ENV = "prod"
const API_BASE_URL = ENV == "prod" ? 'http://bpaternostro.site/api' : "http://localhost:8000/api";

export const API_ENDPOINTS = {
  getPerson: `${API_BASE_URL}/person/1`,
  postReaction: `${API_BASE_URL}/post`,
  postMessage: `${API_BASE_URL}/message`,
  // Add more endpoints as needed
};