import axios from "axios";

const authService = {
  async register(email, password) {
    try {
      const response = await axios.post(
        "https://registrationserver.azurewebsites.net/register",
        {
          username: email,
          password: password,
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "Failed to register";
    }
  },

  async triggerToast(email) {
    try {
      const response = await axios.post("http://localhost:8000/toast", {
        username: email,
      });
      return response.data.toast;
    } catch (error) {
      throw error.response?.data?.message || "Failed to trigger toast";
    }
  },
};

export default authService;
