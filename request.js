const axios = require("axios");

const start = async () => {
    const res = axios.default.get("http://localhost:8080");

    Object.entries(res.headers).forEach(([key, val]) => console.log(`${key}: ${val}`));
}

start();
