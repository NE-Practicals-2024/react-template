const apiUrl: string =
    (import.meta as any).env.DEV ? "http://localhost:5005/api/v1" :
        "https://rcatemplate-backend.onrender.com/api/v1";

export {
    apiUrl
};