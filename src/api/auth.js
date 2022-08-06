import axios from "axios";
export async function login(data)
{
    const respose=await axios.post('http://127.0.0.1:8000/api/login',data);
    return respose.data;
}

export async function signUp(data)
{
    const response= await axios.post('http://127.0.0.1:8000/api/sign-up',data)
    return response.data
}