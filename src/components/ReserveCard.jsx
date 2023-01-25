import React from 'react'

const ReserveCard = ({ img, content }) => {
    return (
        <div className="reserve-card">
            <img src={img} alt={img} />
            <p>{content} <span className='see-more'>See more</span></p>
        </div>
    )
}

export default ReserveCard