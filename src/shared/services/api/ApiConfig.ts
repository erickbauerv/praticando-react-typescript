import axios from "axios"

export const Api = () => {
    return axios.create({
        baseURL: "http://leonardofronza-001-site1.dtempurl.com"
    })
}