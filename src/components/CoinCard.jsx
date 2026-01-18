// @ts-nocheck
import React from 'react'

const CoinCard = ({ coin, onClick }) => {

    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-slate-100 transition duration-300" onClick={onClick}>
                <div className="flex items-center gap-4">
                    <img src={coin.image} alt={coin.name} className="w-10 h-10" />
                    <div>
                        <h3 className="font-bold text-gray-500">{coin.name}</h3>
                        <p className="text-gray-400 text-sm">{coin.symbol.toUpperCase()}</p>
                    </div>
                </div>
                {/* Price */}
                <div className="text-right">
                    
                </div>
            </div>
        </>
    )
}

export default CoinCard