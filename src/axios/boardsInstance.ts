import axios from "axios";

const boardsInstance = axios.create({
    baseURL: "https://trello.com/1/boards/",
    params: {
        key: process.env.REACT_APP_API_KEY,
        token: process.env.REACT_APP_TOKEN,
    },
});

export default boardsInstance;
