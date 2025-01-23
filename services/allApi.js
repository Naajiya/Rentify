import SERVER_URL from './serverUrl'
import commonApi from './commonApi'

// api for admin login
export const adminLogin=async(reqBody)=>{
    return await commonApi("POST",`${SERVER_URL}/login`, reqBody)
}

// add product
export const addProduct = async (reqHeader,reqBody)=>{
    return await commonApi("POST",`${SERVER_URL}/addProducts`,reqHeader,reqBody)
}

// get all added items
export const getAllProduct = async ()=>{
    return await commonApi("GET", `${SERVER_URL}/get-all-products`, "")
}

export const deleteProduct = async (pid) =>{
    return await commonApi("DELETE", `${SERVER_URL}/delete-product/`)
}