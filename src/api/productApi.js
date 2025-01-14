import axios from "axios";
import { backendUrl } from "../components/lib/data";

// * getting all products
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${backendUrl}/product/getAll`);

    // console.log("🐱‍👤✨ ~ getAllProducts ~ response:", response.data);

    const res = response.data;
    if (response.data.success) {
      return { data: res.data, message: res.message };
    } else {
      return {
        data: [],
        message: res.message,
      };
    }
  } catch (error) {
    console.log("🐱‍👤✨ ~ getAllProducts ~ error:", error);
    return { data: [], message: "Internal Server Error" };
  }
};
