import Data from './Data'
 import icon from '../../assets/FAQ/title-icon.png'
const FAQ = () => {


    return (
        <section className='w-full grid place-items-center mt-[50px] mb-[50px]   '>
            {/* Let's go */}
            <div>               
                <img className='w-[23px] h-[22px] ml-[40px] lg:w-[71px] lg:h-[68px] lg:ml-[90px] 2xl:w-[108px] 2xl:h-[102px] 2xl:ml-[150px]'src={icon}/>

              <h1 className='text-[28px] lg:text-5xl font-bold align-center 2xl:text-[72px]  '>FAQs</h1>
            </div>
            
            <div className='mt-[50px] mb-[70px] container'>
       <Data 
       question={"how long this hackathon will take?"}
       answer={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
       i={1}
       ></Data>
       <Data 
       question={"how long this hackathon will take?"}
       answer={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
       i={2}
       ></Data>
       <Data 
       question={"how long this hackathon will take?"}
       answer={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
       i={3}
       ></Data>
       <Data 
       question={"how long this hackathon will take?"}
       answer={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
       i={4}
       ></Data>
       <Data 
       question={"how long this hackathon will take?"}
       answer={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
       i={5}
       ></Data>
          </div>

          <div className='w-full text-center py-[113px] lg:py-[88px] 2xl:py-[132px] mt-[160px] bg-gradient-to-r from-iwd-purple to-iwd-blue  '>
            <h1 className='text-iwd-white text-5xl leading-[96px] lg:text-[85px] 2xl:text-[155px] font-bold '>Still have a question? </h1>
          </div>
        
        </section>
        
    )
  }

export default FAQ