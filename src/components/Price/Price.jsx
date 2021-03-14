import React from 'react';
import data from './model';
import './price.sass';
import './price-media.sass';

const Price  = () => {
    return (
        <div className="price">
            <h2 className="price_title">Price</h2>
            <div className="price_wrap">
                {
                    data.map((item, i) => {
                        return (
                            <div className="price_wrap-item" 
                            style={{"background": item.background}} key={item.id + i}>
                                <h3 className="price_item-title" style={{"color": item.color}}>{item.name}</h3>
                                <ul className="price_item-list">
                                    {
                                        item.advatages.map((adv, j) => {
                                            return (
                                                <li style={{"color": item.color}} key={j}>- {adv}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="price_btn"><h2>{item.price}</h2></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Price;