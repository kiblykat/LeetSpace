import axios from "axios";

let BASE_URL = "http://localhost:5000";
let questionApi = axios.create({ baseURL: BASE_URL });

export default questionApi;