import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const {setSearchName} = useGlobalContext();
  const searchValue = React.useRef('');
  React.useEffect(() => {
    searchValue.current.focus();
  },[]);
  return (
    <section className='section search'>
      <form  className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">search your favorite person</label>
          <input type="text" id="name" ref={searchValue} onChange={(e)=>setSearchName(e.target.value)}/>
        </div>
      </form>
    </section>
  )
}
export default Search;