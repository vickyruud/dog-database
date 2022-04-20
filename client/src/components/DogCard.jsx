import React from 'react'

const DogCard = (props) => {
  return (
    <>
      <div className='card' style={{ width: "18rem", height: 400, paddingBottom : '10' }}>
        <img className='card-img-top' style={{height: 250}}  src={props.dog.image.url} alt='dog-avatar' />
        <div className="card-body">
          <h5 className="card-title">{props.dog.name}</h5>
          <p className="card-text">{ props.dog.bred_for}</p>
          <button className="btn btn-primary">Go somewhere</button>
               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </>
  )
}

export default DogCard