// Fetch the api edpoint and get the data
export const fetchApi = async (endpoint) => {
    try {
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error(`Failed to fetch ${endpoint}: ${res}`);
        return await res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
};

// Get the defaults data from the localstorage or the default
export const loadData = async (apiObj) => {
    const raw = localStorage.getItem(apiObj.key);
    try {
        return raw && JSON.parse(raw);
    } catch {
        return await fetchApi(apiObj.endpoint);
    }
};

// Store updated data in localstorage
export const saveData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};