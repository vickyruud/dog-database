import React from 'react'
import DogCard from './DogCard';

const DogGrid = (props) => {


  const arrayDogs = props.dogs.map((dog, i) => {
    return (
      <div key={i} className="col-sm">
      <DogCard  dog={dog}/>
    </div>
    )
  })

  return (
    <div className="card-group" style={{padding : 10}}>
      {arrayDogs}
    </div>
  )
}

export default DogGrid