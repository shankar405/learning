import React from 'react'

type props={
 children:React.ReactNode
}
const Card = ({children}:props) => {
  return (
    <div className='border border-gray-200 shadow-md rounded-md  flex justify-center items-center'>{children}</div>
  )
}

export default Card