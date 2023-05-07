import axios from "axios";

const useAllCoupons = async(id) => {
    try {
        const response = await axios.get(
            `http://localhost:8000/api/getAllCodes/${id}`,
            { withCredentials: true }
          );
          return response.data.discountCodes
    } catch (error) {
        
    }
}

export default useAllCoupons