import BASE_URL from "./baseUrl"
import { commonStructure } from "./commonStructure"

//admin login
export const loginApi = async (body) => {

    return await commonStructure('POST', `${BASE_URL}/admin/login`, body)
}

//teacher login
export const teacherLoginApi = async (body) => {

    return await commonStructure('POST', `${BASE_URL}/teacher/login`, body)
}


//admin add teacher
export const teacherAddApi = async (body, header) => {
    return await commonStructure('POST', `${BASE_URL}/admin/add-teacher`, body, header)
}

//get all teachers
export const getAllTeachersApi = async () => {
    return await commonStructure('GET', `${BASE_URL}/admin/get-all-teachers`, {})
}

//show teacher
export const showTeacherApi = async (id) => {
    return await commonStructure('GET', `${BASE_URL}/admin/show-teacher/${id}`, {})
}

//edit teacher
export const editTeacherApi = async (body) => {
    return await commonStructure('PATCH', `${BASE_URL}/admin/edit-teacher`, body)
}

//admin add student
export const studentAddApi = async (body, header) => {
    return await commonStructure('POST', `${BASE_URL}/admin/add-student`, body, header)
}

//get all students
export const getAllStudentsApi = async () => {
    return await commonStructure('GET', `${BASE_URL}/admin/get-all-students`, {})
}