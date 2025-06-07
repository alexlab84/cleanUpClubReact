import instance from "./instance";
export const getGroups = async () => {
  try {
    const response = await instance.get("/groups/");
    return response.data;
  } catch (error) {
    console.error("Error fetching groups:", error);
    throw error;
  }
};