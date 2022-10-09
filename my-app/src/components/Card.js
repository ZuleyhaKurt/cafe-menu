import React from 'react'

const Card = ({ item }) => {
    
    const{name,title,price,url,category}=item
  return (
      <div className='main'>
          <div className="why">
                <div className='card'>
                    <img src={url} alt="" />
                        <div>
                            <div className='first'>
                            <p>{name} <span>{price}</span></p>
                            </div>
                            <p>{ category}</p>
                            <p>{ title}</p>
                        </div>
                    </div>
              </div>
          </div>
  )
}

export default Card