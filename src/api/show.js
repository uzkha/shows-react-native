import axios from "axios";

export default axios.create({
    baseURL:"http://435548db8d8b.ngrok.io",
    headers:{
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vdm9zc0BnbWFpbC5jb20iLCJwYXNzd29yZCI6InNlY3JldG8iLCJpYXQiOjE2MTgxNDEzNjYsImV4cCI6MTYxODE1OTM2Nn0.hGgRrBGir0Bxm3c_D5YDRr035xMMMOa-lu8C9NG8hYE"
    }
});

