
// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchTopCoins } from '../services/coinGeckoAPI';
import SearchBar from '../components/SearchBar';
import CoinCard from '../components/CoinCard';

const Gainers = () => {
    const [coins, setCoins] = useState([]);
    const [searching, setSearching] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        const getGainers = async () => {
            try {
                setSearching(true);
                const data = await fetchTopCoins(50);
                setCoins(data);
                setError(null);
            } catch (error) {
                setError('Failed to fetch coins. Please try again later.', error);
            } finally {
                setSearching(false);
            }
        }
        getGainers();
    }, []);
    // Filtered Coins Based On SEarch
    const sortedCoins = [...coins]
        .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
        .slice(0, 30);

    const filteredCoins = sortedCoins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCoinClick = (coinId) => {
        navigate(`/coin/${coinId}`);
    }
    if (error) {
        return (
            <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">

                <p className="text-xl text-red-700 font-bold">{error}</p>
            </div>
        );
    }
    return (
        <>
            <div className="min-h-screen p-2 md:p-8 text-white">
                <div className="p-8">

                    <h1 className="text-3xl font-bold mb-8 text-black">Top Gainers (24h) 📈</h1>
                    <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

                </div>
                <div className='text-black'>
                    {searching ? <div className="animate-spin rounded-full h-44 w-44 border-b-8 m-auto border-gray-900 "></div> : null}
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {filteredCoins.map((coin) => (
                        <div
                            key={coin.id}
                            onClick={() => handleCoinClick(coin.id)}
                            className="p-4 rounded-lg flex items-center justify-between border-b hover:border-l-4 hover:border-green-200 hover:cursor-pointer hover:transition duration-300">

                            <div className="flex items-center gap-4">
                                <p className='text-gray-400 text-sm'>{coin.market_cap_rank}</p>
                                {/* <img src={coin.image} alt={coin.name} className="w-10 h-10" />
                                    <div>
                                        <h3 className="font-bold text-black">{coin.name}</h3>
                                        <p className="text-gray-400 text-sm">{coin.symbol.toUpperCase()}</p>
                                    </div> */}
                                <CoinCard coin={coin} onClick={() => navigate(`/coin/${coin.id}`)} />

                            </div>
                            <div className="flex justify-between items-center gap-4 md:gap-24 text-right text-black">
                                <div>
                                    <p className="font-bold">${coin.current_price.toLocaleString()}</p>
                                    <p className={coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}>
                                        {coin.price_change_percentage_24h ? coin.price_change_percentage_24h.toFixed(2) : '0.00'}%
                                    </p>
                                </div>
                                <p>{coin.total_volume.toLocaleString()}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Gainers
