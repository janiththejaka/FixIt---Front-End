import { useEffect } from "react";
import api from "../services/api/api";

function ApiTest() {
  useEffect(() => {
    async function testApi() {
      try {
        const response = await api.get("/api/profile/providers");

        console.log("API response:", response.data);
      } catch (error) {
        console.error("API error:", error);
      }
    }

    testApi();
  }, []);

  return <p>Checking backend connection...</p>;
}

export default ApiTest;