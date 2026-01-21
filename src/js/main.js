import { loadOrFetch } from "./utils.js";

const FREE_GAMES_API = {
    key: "freeGames",
    /* 
        We use a prefix instead of the full API endpoint 
        to avoid CORS issues. The Vite server calls the API
        using its own proxy and masks our origin, so the API 
        treats our requests as coming from the same origin.
    */
    endpoint: "/api-games/games",
};

// intial function that start entire project logic and focntionality
const init = async () => {
    // get the games list
    const games = await loadOrFetch(FREE_GAMES_API);
};

// load and execute and start script after page fully load
document.addEventListener("DOMContentLoaded", async () => {
    // Start excuting
    await init();
});