  
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from './Loading'
export const url = `https://www.breakingbadapi.com/api/characters`

const SingleProfile = () => {
  const {id} = useParams();
  const [loading, setloading] = useState(true);
  const [singlePerson, setsinglePerson] = useState([]);
  // fetch data
  const fetchdata = async (url) =>{
     setloading(true);
     try {
       const response = await fetch(url);
       const data = await response.json();
       setsinglePerson(data);
     } catch (error) {
       console.log(error);
     }
     setloading(false);
  }

  useEffect(() => {
    fetchdata(`${url}/${id}`);
  }, [id])

  if(loading){
  return <Loading/>
}
if(!singlePerson){
  return <h2 className="section-title">no person display</h2>
};

  return(
    <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        {singlePerson.map((item)=>{
          const {name,birthday,status,img,portrayed,occupation,nickname,category} = item;
          return (
        <div className='drink'>
          <img src={img} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>birthday :</span> {birthday}
            </p>
            <p>
              <span className='drink-data'>nicknam :</span> {nickname}
            </p>
            <p>
              <span className='drink-data'>status :</span> {status}
            </p>
            <p>
              <span className='drink-data'>portrayed :</span> {portrayed}
            </p>
            <p>
              <span className='drink-data'>Occupation :</span>
              {occupation.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
          </div>
        </div>
          )
        })}
        
      </section>
  ) 
}

export default SingleProfile