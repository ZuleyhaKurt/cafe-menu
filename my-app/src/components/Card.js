import React from 'react'

const Card = ({ item }) => {
    
    const{name,title,price,url,category}=item
  return (
    <div className="container">
      <div className='main'>
       <img src={url} alt="" />
        <div className='content'>
            <div className='first'>
            <p>{name} </p>
            <span>{price}</span>
            </div>
            <div className='second'>
                   <p><b>{ category}</b></p>
                  <p>{ title}</p>
            </div>
                      
        </div>
      </div>
    </div>
  )
}

export default Card