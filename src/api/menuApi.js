import axios from "axios";
import { backendUrl } from "../components/lib/data";

export const getAllMenu = async () => {
  try {
    const response = await axios.get(`${backendUrl}/menu/getAll`);

    const res = response.data;
    //     console.log("🐱‍👤✨ ~ getAllMenu ~ res:", res);

    if (res.success) {
      return {
        data: res.data,
        message: res.message,
      };
    } else {
      return { data: [], message: res.message };
    }
  } catch (error) {
    console.log("🐱‍👤✨ ~ getAllMenu ~ error:", error);
    return { data: [], message: "Internal Server Error" };
  }
};
