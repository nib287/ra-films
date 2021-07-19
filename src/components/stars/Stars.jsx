import React from 'react'
import './Stars.css'
import Star from '../star/Star'
import shortid from 'shortid'

function Stars({count}) {
    const visible = count >= 1 && count <= 5 
    
    const arrStars = Array(count).fill('star');
    const arrStarsWhithId = arrStars.map(star => {
        return {id: shortid.generate(), value: star}
    })
 
    return (
        <ul className="card-body-stars u-clearfix">
           {arrStarsWhithId.map(star => <Star key={star.id} visible={visible} />)}
        </ul>
    )
}

export default Stars
