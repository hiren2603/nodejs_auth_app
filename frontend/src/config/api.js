import axios from 'axios'
export const loginUser = async(user)=>{
    try{
        const response = await axios.post('http://localhost:8000/api/v1/users/login',user,{
            withCredentials: true,
        })
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}

export const ragisterUser = async(user)=>{
    try{
        const response = await axios.post('/api/v1/users/ragister',user,{
            withCredentials: true,
        })
        return response.data
    }catch(error){
        return error
    }
}

export const deleteUser =async(id)=>{
    try {
        const response = await axios.delete(`/api/v1/users/delete/${id}`, {
            withCredentials:true
        })
        localStorage.removeItem('currentUser')
        return response
    } catch (error) {
        return error
    }
}