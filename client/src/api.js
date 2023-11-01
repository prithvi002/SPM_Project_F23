const BASE_URL = "http://localhost:5000/";

export const apiFetch = async (path, options) => {
    const url = new URL(path, BASE_URL);
    const finalOptions = {
        ...options,
        headers: {
            ...options?.headers,
            "Content-Type": "application/json",
        },
        // credentials: "include",
    }

    return await fetch(url.href, finalOptions);
}
