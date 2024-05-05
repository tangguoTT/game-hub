import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "8db3d38135af4bc8afb1b089345f8fe1"
    }
})