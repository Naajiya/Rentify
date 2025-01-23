import SERVER_URL from './serverUrl'
import commonApi from './commonApi'

// api for admin login
export const adminLogin=async(reqBody)=>{
    return await commonApi("POST",`${SERVER_URL}/login`, reqBody)
}

export const addProduct = async (reqHeader,reqBody)=>{
    return await commonApi("POST",`${SERVER_URL}/addProducts`,reqHeader,reqBody)
}