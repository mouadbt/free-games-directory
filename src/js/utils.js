export const fetchData = async (endpoint) => {
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error(`Fetch failed: ${endpoint}`);
    return res.json();
};

export const loadData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

export const saveData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const loadOrFetch = async ({ key, endpoint }) => {
    const cached = loadData(key);
    if (cached) return cached;

    const fresh = await fetchData(endpoint);
    saveData(key, fresh);
    return fresh;
};