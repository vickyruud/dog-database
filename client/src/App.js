import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './app.css'
import { dogs } from './utils/fetchData'
import Loading from './components/Loading';
import DogGridNextUI from './components/DogGridNextUI';
import Search from './components/Search';
import DogModal from './components/DogModal';


const App = () => {

  const [doggies, setDoggies] = useState([])
  const [searchResult, setSearchResult] = useState(doggies || []);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  //loads the data from api
  useEffect(() => {
    dogs().then(res => {
      console.log(res);
      setDoggies(res);
      setSearchResult(res);
      setTimeout(() => {
        setLoading(false);
        
      }, 3000);
    })
  }, [])

  const handleSearch = (value) => {
    setSearchResult(doggies.filter(dog => {
      if (dog.name.toLowerCase().includes((value.toLowerCase()))) {
        return true;
      } else {
        return false;
      }
    }));
    

  }

  const clearSearch = () => {
    const searchValue = document.getElementById('searchField')

    setSearchResult(doggies);
    searchValue.value = '';
    
  }
   

 

  return (
    <div className='body'>
      {/* {loading ? <Loading />  : <DogGrid className='dog-grid' dogs={doggies}/> } */}
      <Search handleSearch={handleSearch} value={value} setValue={setValue} clearSearch={clearSearch} />      
      {loading ? <Loading /> : <DogGridNextUI handleOpen={handleOpen} className='dog-grid' dogs={searchResult} />}  
      <DogModal open={open} handleClose={handleClose} />
    </div>
  )
}

export default App