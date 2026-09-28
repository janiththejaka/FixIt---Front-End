import api from "../../../services/api/api";

export async function getProviders() {
  const response = await api.get("/api/profile/providers");

  return response.data;
}