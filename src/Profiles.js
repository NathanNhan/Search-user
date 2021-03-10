import React from 'react'
import { useGlobalContext } from './context'

import Loading from './Loading';
import Profile from './Profile';


const Profiles = () => {
  const {loading, person} = useGlobalContext();
  if(loading){
    return (
      <Loading/>
    )
  }
  if(person.length < 1){
    <h2 className='section-title'>
        No person matched to search citeria.
    </h2>
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>
      <div className="cocktails-center">
        {person.map((item)=>{
          return <Profile key={item.char_id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Profiles