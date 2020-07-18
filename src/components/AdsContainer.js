import React from 'react'

const AdsContainer = props => {

    const scrollableAds = [...props.ads.items].map(ad => {
        console.log(ad.img)
        return (
            <li key={ad.id} >
                <a href={ad.link}><img src={ad.img}/></a>
            </li>
        )
    })

    return (
        <div className="adsContainer">
            {scrollableAds}
        </div>
    )
}

export default AdsContainer
