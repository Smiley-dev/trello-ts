import axios from "axios";

const listsInstance = axios.create({
    baseURL: "https://trello.com/1/lists/",
    params: {
        key: process.env.REACT_APP_API_KEY,
        token: process.env.REACT_APP_TOKEN,
    },
});

export default listsInstance;
