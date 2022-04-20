import React from 'react'

const DogCard = (props) => {
  return (
    <>
        <img className='card-img-top'  src={props.dog.image.url} alt='dog-avatar' />
        <div className="card-body">
          <h5 className="card-title">{props.dog.name}</h5>
          <p className="card-text">{ props.dog.bred_for}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </>
  )
}

export default DogCard