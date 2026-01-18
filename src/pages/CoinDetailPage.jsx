// @ts-nocheck
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchCoinDetail } from '../services/coinGeckoAPI'
import { ArrowBigLeft, ArrowLeft } from 'lucide-react'
// import PriceChart from '../components/PriceChart'

const CoinDetailPage = () => {
    const { coinId } = useParams();
    const navigate = useNavigate();
    const [coin, setCoin] = useState();
    const [searching, setSearching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCoinDetail = async () => {
            try {
                setSearching(true);
                const data = await fetchCoinDetail(coinId);
                setCoin(data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch coins. Please try again later.', err);
            } finally {
                setSearching(false);
            }
        }
        getCoinDetail();
    }, [coinId]);

    if (searching) {
        return (
            <div className="min-h-screen bg-slate-200 text-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-44 w-44 border-b-8 m-auto border-gray-900 "></div>

            </div>
        );
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
            <div className="min-h-screen px-6 py-8 md:p-8">
                <button onClick={() => navigate('/')} className='px-4 py-2 border border-green-500 rounded-lg shadow-md text-green-700 bg-white'>
                    <ArrowLeft className='text-green-700 mr-2 inline' /> Back</button>
                <div className="flex items-center gap-4 mb-8 mt-8">
                    <img src={coin.image.large} alt={coin.name} className="w-16 h-16" />
                    <div>
                        <h1 className="text-4xl font-bold">{coin.name}</h1>
                        <p className="text-gray-400 text-xl">{coin.symbol.toUpperCase()}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="border border-green-500  shadow-lg p-6 rounded-lg">
                        <p className="text-gray-400 mb-2">Current Price</p>
                        <p className="text-3xl font-bold">
                            ${coin.market_data.current_price.usd.toLocaleString()}
                        </p>
                        <p className={`mt-2 ${coin.market_data.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {coin.market_data.price_change_percentage_24h.toFixed(2)}% (24h)
                        </p>
                    </div>

                    <div className="border border-green-500 bg-green-100 shadow-lg p-6 rounded-lg">
                        <p className="text-gray-400 mb-2">Market Cap</p>
                        <p className="text-2xl font-bold">
                            ${coin.market_data.market_cap.usd.toLocaleString()}
                        </p>
                    </div>

                    <div className="border border-green-500  shadow-lg p-6 rounded-lg">
                        <p className="text-gray-400 mb-2">24h Volume</p>
                        <p className="text-2xl font-bold">
                            ${coin.market_data.total_volume.usd.toLocaleString()}
                        </p>
                    </div>
                </div>
                {/* <div className="mb-8"> */}
                    {/* <PriceChart /> */}
                {/* </div> */}
                {/* Stats */}
                <div className="border border-green-500 shadow-lg  p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Statistics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span className="text-gray-400">24h High</span>
                            <span className="font-semibold">${coin.market_data.high_24h.usd.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span className="text-gray-400">24h Low</span>
                            <span className="font-semibold">${coin.market_data.low_24h.usd.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span className="text-gray-400">All-Time High</span>
                            <span className="font-semibold">${coin.market_data.ath.usd.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span className="text-gray-400">All-Time Low</span>
                            <span className="font-semibold">${coin.market_data.atl.usd.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span className="text-gray-400">Circulating Supply</span>
                            <span className="font-semibold">{coin.market_data.circulating_supply.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span className="text-gray-400">Total Supply</span>
                            <span className="font-semibold">
                                {coin.market_data.total_supply ? coin.market_data.total_supply.toLocaleString() : 'N/A'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoinDetailPage