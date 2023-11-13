import BASE_URL from "./baseUrl"
import { commonStructure } from "./commonStructure"

//admin login
export const loginApi = async (body) => {

    return await commonStructure('POST', `${BASE_URL}/admin/login`, body)
}


//admin add teacher
export const teacherAddApi = async (body, header) => {
    return await commonStructure('POST', `${BASE_URL}/admin/add-teacher`, body, header)
}

//get all teachers
export const getAllTeachersApi = async () => {
    return await commonStructure('GET', `${BASE_URL}/admin/get-all-teachers`, {})
}
