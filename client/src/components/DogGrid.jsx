import React from 'react'
import DogCard from './DogCard';
import { DogCardNext } from './DogCardNext';

const DogGrid = (props) => {

  //create array to render
  const arrayDogs = props.dogs.map((dog, i) => {
    return (
            <DogCardNext dog={dog} />

    )
  })

  return (
    <div className="card-group" style={{padding : 10}}>
      {arrayDogs}
    </div>
  )
}

export default DogGrid