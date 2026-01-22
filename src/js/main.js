import { loadOrFetch } from "./utils.js";

/* 
    We use a prefix instead of the full API endpoint 
    to avoid CORS issues. The Vite server calls the API
    using its own proxy and masks our origin, so the API 
    treats our requests as coming from the same origin.
*/
const apiRequests = [
    {
        key: "popularGames",
        endpoint: "/api-games/games?sort-by=popularity",
    },
    {
        key: "newGames",
        endpoint: "/api-games/games?sort-by=release-date",
    },
    {
        key: "alphabeticalGames",
        endpoint: "/api-games/games?sort-by=alphabetical",
    }
];

// initial function that start entire project logic and functionality
const init = async () => {
    // get the games list
    const [popularGames, newGames, alphabeticalGames] = await Promise.all(
        apiRequests.map(async (apirequest) => {
            return await loadOrFetch(apirequest);
        })
    );

    console.log({ popularGames, newGames, alphabeticalGames });

    // First render the
};


// load and execute and start script after page fully load
document.addEventListener("DOMContentLoaded", async () => {
    // Start executing
    await init();
});