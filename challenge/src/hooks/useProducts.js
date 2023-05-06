import axios from "axios"

const useProducts = async() => {
    try{
        const response = await axios.get("http://localhost:8000/api/products",)
        return response.data.products
    }catch(e){
        console.log(e)
    }

    
}
export default useProducts