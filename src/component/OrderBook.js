import React, { useEffect, useState } from 'react'
import { streamService } from "../Stream"
import '../style/component/orderBook.css'

export default function OrderBook() {

  const [ orderBookData, setOrderBookData ] = useState(null)

  function returnOrderBook (orderBook) {
    setOrderBookData(orderBook)
  }

  useEffect(() => {
    streamService(returnOrderBook)
  }, [])

  return (
    <> { orderBookData &&
      <>
        <div className="order-book-container">
          <div className="order-book-title">Emir Defteri</div>  
          <div className="order-book-columns flex-center">
            <div className="">Fiyat</div>
            <div className="">Miktar</div>
            <div className="">Toplam</div>
          </div>
          <div> { orderBookData.Buy.map((buyItems, buyIndex) => {
            return (
                <div key={buyIndex} className="order-book-rows flex-center">
                  <div className="buy-highlight" style={{width: Math.floor(Math.random() * 101) + '%'}}></div>
                  <span className="row-items">
                    {buyItems.Price.toFixed(6)}
                  </span>
                  <span className="">
                    {buyItems.Amount.toFixed(6)}
                  </span>
                  <span className="">
                    {buyItems.Total.toFixed(6)}
                  </span>
                </div>
              )
            })}
          </div>
          <div className="last-transaction flex-center">
            <div> Son İşlem </div>
            <div className="">378.669,45 TRY</div>
            <div className=""> ^ +2.15% </div>
          </div>
          <div> { orderBookData.Sell.map((sellItems, sellIndex) => {
            return (
              <div key={sellIndex} className="order-book-rows flex-center">
                <div className="sell-highlight" style={{width: Math.floor(Math.random() * 101) + '%'}}></div>
                <span className="">
                    {sellItems.Price.toFixed(6)}
                  </span>
                  <span className="">
                    {sellItems.Amount.toFixed(6)}
                  </span>
                  <span className="">
                    {sellItems.Total.toFixed(6)}
                  </span>
              </div>
              )
            })}
          </div>
        </div>
      </>
      
    } </>
  )

}