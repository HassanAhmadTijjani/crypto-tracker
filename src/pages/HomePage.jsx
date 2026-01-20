// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { fetchTopCoins } from '../services/coinGeckoAPI'
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';
import CoinCard from '../components/CoinCard';



const HomePage = () => {



    const [coins, setCoins] = useState([]);
    const [searching, setSearching] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const getCoins = async () => {
            try {
                setSearching(true);
                const data = await fetchTopCoins(70);
                setCoins(data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch coins. Please try again later.', err);
                // setSearching(true);
            } finally {
                setSearching(false);
            }
        }
        getCoins();
    }, []);

    // Filter Coins Based On Search Term
    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()));
    const handleCoinClick = (coinId) => {
        navigate(`/coin/${coinId}`);
    }

    // if (searching) {
    //     return (
    //         <div className="min-h-screen bg-slate-200 text-white flex items-center justify-center">
    //             <div className="animate-spin rounded-full h-44 w-44 border-b-8 m-auto border-gray-900 "></div>

    //         </div>
    //     );
    // }
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

                    <h1 className="text-3xl font-bold mb-8 text-black">Top Crypto-Currencies</h1>
                    <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

                </div>
                <div className='text-black'>
                    {searching ? <div className="animate-spin rounded-full h-44 w-44 border-b-8 m-auto border-gray-900 "></div> : <h2>World</h2>}
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
    );
}
export default HomePage
