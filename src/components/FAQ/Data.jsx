import { useState } from 'react'
const Data = ({question,answer,i}) => {

    const [color, setColor]=useState("bg-iwd-purple")

const [selected, setSelected]=useState(null)
const toggle = (i) => {
  if( selected ==i) {
    setColor("bg-iwd-purple")
    return setSelected(null)
  }{
  setSelected(i)
  setColor("bg-iwd-blue")
  }
}
    return (
       
            <div className={`mb-[5px] ${color}`}>
            <div className='flex justify-between text-[12px] lg:text-[22px] 2xl:text-[32px] cursor-pointer text-iwd-white container py-6' onClick={()=>toggle(i)}>
              {question}
              <span>{selected==i ? '-' : '+'}</span>
              </div>
              
            { selected===i? (

            <dropdown>
            <div className=" duration-75 text-iwd-white text-[7px] lg:text-[12px] 2xl:text-[18px] container py-6 " >{answer} </div>
            </dropdown>
            ): null
            }

            </div>

        
    )
    
}

export default Data