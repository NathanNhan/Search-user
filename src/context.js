import React, { useState, useContext, useEffect } from 'react'
// make sure to use https

export const url = `https://www.breakingbadapi.com/api/characters`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [SearchName, setSearchName] = useState('');
  const [person, setperson] = useState([]);
  //fetch data 
  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setperson(data);
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData(`${url}?name=${SearchName}`);
  }, [SearchName])
  return <AppContext.Provider value={{SearchName,setSearchName,loading,person}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }