// @ts-nocheck
const BASE_URL = 'https://api.coingecko.com/api/v3';
// Fetch Top Crypto-Currency
export const fetchTopCoins = async (limit = 150) => {
    try {
        const res = await fetch(`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`

        );
        if (!res.ok) {
            throw new Error("Failed to fetch coins!");
        }
        const data = await res.json();
        return data;

    } catch (error) {
        console.error('Error fetching top coins!', error);
        return error;
    }
};

// Fetch Single Coin Details
export const fetchCoinDetail = async (coinId) => {
    try {
        const res = await fetch(`${BASE_URL}/coins/${coinId}?localization=false&tickers=false&community_data=false&developer_data=false`
        );
        if (!res.ok) {
            throw new Error("Failed to fetch coin details!");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error Fetching Coin Detail', error);
        return error;
    }
};

// Fetch coin market chart data
export const fetchCoinChart = async (coinId, days = 7) => {
    try {
        const res = await fetch(`${BASE_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
        );
        if (!res.ok) {
            throw new Error("Failed to fetch coin chart data!");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching chart data:', error);
        throw error;
    }
}