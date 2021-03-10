import React from 'react'
import { Link } from 'react-router-dom'
const defaultBirthday = '1/01/2020'
const Profile = ({char_id,img,name,birthday,portrayed}) => {

  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={img} alt={name}/>
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{birthday === 'Unknown' && defaultBirthday}</h4>
        <p>{portrayed}</p>
        <Link to = {`/person/${char_id}`} className="btn btn-primary btn-details">
          details
          </Link>
      </div>
    </article>
  )
}

export default Profile