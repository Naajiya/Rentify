import SERVER_URL from './serverUrl'
import commonApi from './commonApi'



// admin

// api for admin login
export const adminLogin=async(reqBody)=>{
    return await commonApi("POST",`${SERVER_URL}/login`, reqBody)
}

// add product
export const addProduct = async (reqHeader,reqBody)=>{
    return await commonApi("POST",`${SERVER_URL}/addProducts`,reqBody,reqHeader)
}

// get all added items
export const getAllProduct = async ()=>{
    return await commonApi("GET", `${SERVER_URL}/get-all-products`, "")
}

export const deleteProduct = async (pid) =>{
    return await commonApi("DELETE", `${SERVER_URL}/delete-product/${pid}`, {})
}

export const updateProduct = async (pid, reqBody, reqHeader) => {
    return await commonApi("PUT", `${SERVER_URL}/update-product/${pid}`, reqBody, reqHeader);
};




// user

// user register
export const userRegister =async (reqBody)=>{
    return await commonApi("POST", `${SERVER_URL}/user-Register`, reqBody)
}

export const userLogin = async(reqBody)=>{
    return await commonApi("POST", `${SERVER_URL}/user-Login`, reqBody)
}

export const selectCategory=async (cat)=>{
    return await commonApi("GET",`${SERVER_URL}/user-category/${cat}`,{})
}

export const viewProduct = async (pid)=>{
    return await commonApi("GET", `${SERVER_URL}/product-details/${pid}`, {})
}

export const addtoCart = async (reqHeader, reqBody) => {
    return await commonApi("POST", `${SERVER_URL}/add-to-cart`, reqBody, reqHeader);
};

export const getCartDetails = async (reqHeader)=>{
    return await commonApi("GET",`${SERVER_URL}/get-carts`,reqHeader)
}