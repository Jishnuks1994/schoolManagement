import BASE_URL from "./baseUrl"
import { commonStructure } from "./commonStructure"

//admin login
export const loginApi=async(body)=>{
    const user=body.user
    
    return await commonStructure('POST',`${BASE_URL}/admin/login`,body)
     }
