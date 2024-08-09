import React from 'react'

type props ={
  currCustomer :number;
  images :string[]
}
const MainContainer:React.FC<props> = ({currCustomer, images}) => {

  return (
    <div className='mx-10 '>
      <h1 className='text-center text-2xl mt-4'>Customer {currCustomer+1} Details here</h1>
      <p className='text-center mt-5 w-10/12 m-auto'>{currCustomer%2 ==0 ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias numquam, sed est repudiandae amet molestias perferendis optio sint velit repellat ipsam explicabo! Quae animi temporibus et voluptates laudantium, velit architecto ad enim quia natus ab, dolorum nam eveniet, error aliquid.':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur, autem voluptas quibusdam sunt odit vel sint porro omnis, recusandae reiciendis fugit eos nostrum eveniet repellendus ad rerum cumque delectus!'}</p>
      <div className='grid grid-cols-3 gap-4 transition-all mt-4 duration-1000 ease-in-out'>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index}`} className='rounded-lg shadow-md w-7/12 m-auto h-[120px] p-4 hover:scale-105 transition-transform duration-1000 ease-in-out' />
        </div>
      ))}
    </div>

    </div>
  )
}

export default MainContainer
