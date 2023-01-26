import React from 'react'
import '../style/home_style.css'



import LandingPage from '../components/LandingPage'
import WildLife from '../components/WildLife'
import SlotPic from '../assets/slot.svg'
import Frame1 from '../assets/frame1.svg'
import Elephant from '../assets/elephant.svg'
import Frame2 from '../assets/frame2.svg'
import Frame3 from '../assets/frame3.svg'
import Giraffe from '../assets/giraffe.svg'
import Frame4 from '../assets/frame4.svg'
import Frame5 from '../assets/frame5.svg'
import Frame6 from '../assets/frame6.svg'
import Frame7 from '../assets/frame7.svg'
import ReserveCard from '../components/ReserveCard'
import TextField from '../components/TextField'


const Home = () => {

  const listOfAnimalsPic = [Giraffe, Frame5, Frame7, Frame6];

  const listOfReservedata = [
    {
      img: Frame1,
      content: 'Nairobi National Park is a national park in Kenya that was established in 1946 about 7 km south of Nairobi. It is fenced on three sides, whereas the open southern boundary...',
    },
    {
      img: Frame2,
      content: 'Nkomazi Private Game Reserve is a malaria-free, family-friendly glamping and safari destination in Mpumalanga. The game reserve is set to...',
    },
    {
      img: Frame3,
      content: 'The Mombo Concession is located within Moremi Game Reserve in Botswana and is arguably the best big game viewing area in all of Southern Africa. Spanning 111,000 acres in the central...',
    },
  ];

  const fieldsData = [
    {
      hintText: 'Type your full name',
      labelText: 'Full name',
    },
    {
      hintText: 'abc@xyz.com',
      labelText: 'Email Address',
    },
    {
      hintText: 'Type your phone number',
      labelText: 'Phone Number',
    },
  ]

  return (
    <section className='home'>
      <LandingPage />
      <WildLife />
      <div className="reserve" id="reserve">
        <div className="slot-logo-wrapper">
          <img src={SlotPic} alt="Slot picture" />
        </div>
        <h1>Popular Places to See</h1>
        <div className="reserve-card-wrapper">
          {listOfReservedata.map(({ content, img }) => {
            return (
              <ReserveCard key={img} content={content} img={img} />
            )
          })}
        </div>
      </div>
      <div className="reserve-2">
        <div className="reserve-2-imgs-wrapper">
          {listOfAnimalsPic.map((e) => {
            return <div className="reserve-2-card" key={e}>
              <img src={e} alt="$e" />
            </div>
          })}
        </div>
        <h1>Make a Reservation</h1>
        <div className="reserve-form">
          <div className="form-pic">
            <img src={Frame4} alt="Form pic" />
          </div>

          <form>
            {fieldsData.map(({ hintText, labelText }) => {
              return <TextField hintText={hintText} lblText={labelText} key={labelText} />
            })}
            <div className="date-wrapper">
              <div className="input-wrapper">
                <label htmlFor='date'>Date of visit</label>
                <input type="date" id='date' />
              </div>
              <div className="input-wrapper">
                <label htmlFor='dur'>Duration</label>
                <input type="text" id='dur' placeholder='Enter date' />
              </div>
            </div>
            <a href="#"> Book Now</a>
          </form>
        </div>
        <div className="elephant-logo-wrapper">
          <img src={Elephant} alt="Elephant logo" />
        </div>
      </div>
    </section>
  )
}

export default Home
