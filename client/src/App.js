import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './app.css'
import { dogs } from './utils/fetchData'
import DogGrid from './components/DogGrid';
import Loading from './components/Loading';
import { DogCardNext } from './components/DogCardNext';


const App = () => {

  const [doggies, setDoggies] = useState([])
  const [loading, setLoading] = useState(true);
  
  //loads the data from api
  useEffect(() => {
    dogs().then(res => {
      console.log(res);
      setDoggies(res);
      setTimeout(() => {
        setLoading(false);
        
      }, 3000);
    })
  }, [])

 

  return (
    <div className='body'>
      {loading ? <Loading />  : <DogGrid className='dog-grid' dogs={doggies}/> }
      
    </div>
  )
}

export default App