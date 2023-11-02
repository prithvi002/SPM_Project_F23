export const apiFetch = async (path, options) => {
    const finalOptions = {
        ...options,
        headers: {
            ...options?.headers,
            "Content-Type": "application/json",
        },
        credentials: "include",
    }

    return await fetch(path, finalOptions);
}
