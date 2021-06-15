import axios from "axios";

const cardsInstance = axios.create({
    baseURL: "https://trello.com/1/cards/",
    params: {
        key: process.env.REACT_APP_API_KEY,
        token: process.env.REACT_APP_TOKEN,
    },
});

export default cardsInstance;
