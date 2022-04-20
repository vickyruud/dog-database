import React from 'react'
import DogCard from './DogCard';

const DogGrid = (props) => {


  const arrayDogs = props.dogs.map((dog, i) => {
    return (
      <div key={i} className="card" style={{width : "18rem"}}>
      <DogCard dog={dog}/>
    </div>
    )
  })

  return (
    <div className="card-deck" style={{padding : 10}}>
      {arrayDogs}
    </div>
  )
}

export default DogGrid