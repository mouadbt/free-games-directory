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
    const cachedData = loadData(key);
    const now = Date.now();
    const ONE_DAY = 24 * 60 * 60 * 1000;

    if (cachedData && (now - (cachedData.updated_at || 0) < ONE_DAY)) {
        return cachedData.data;
    }

    const freshData = await fetchData(endpoint);
    saveData(key, { data: freshData, updated_at: now });
    return freshData;
};