import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:3005',
    headers: {
        'Content-Type': 'application/json',
    }
})


export function add_product(product){
    return api.post('/create',product,{headers: {  'Content-Type': 'multipart/form-data'}})
}

export function get_product(product){
    return api.get('/serve')
}

export function get_one_product(id){
    return api.get(`/details/${id}`)
}

export function delete_product(product){
    return api.post(`/delete/${product}`)
}

export function delete_All_products(){
    return api.delete('delete')
}

export function get_All_email(email){
    return api.post('/email',email)
}

export function register(user){
    return api.post('/register',user)
}

export default api;