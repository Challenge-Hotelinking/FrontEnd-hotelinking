import axios from "axios";

const useChangeState = async (id, idUser) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/api/changeStateCode/${id}/${idUser}`,
      { withCredentials: true }
    );
    return response.data.message
  } catch (error) {
    console.log(error);
  }
};

export default useChangeState;
