import React from 'react'
import './home1.css'
import { Button, Card, Carousel, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Naav1 from './Naav1';
import bo from './images/book.png'
import mo from './images/money.png'
import co from './images/cust.png.png'
import so from './images/social.png'
import wo from './images/Wedding.webp'
import bday from './images/bday.avif'
import party from './images/party.jpg'
import meh from './images/mehandi.jpg'
import eng from './images/engage.h'
import one from './images/1.avif'
import two from './images/2.avif'
import three from './images/3.webp'
import four from './images/4.jpg'
import five from './images/5.avif'
import six from './images/6.jpg'
import seven from './images/7.jpg'
import eight from './images/8.jpg'
import nine from './images/9.jpg'
import ten from './images/10.jpg'
import eleven from './images/11.jpg'
import twelve from './images/12.jpg'
import show11 from './images/show1.jpg'
import show12 from './images/show2.jpeg'
import show13 from './images/show3.jpeg'
import show14 from './images/show4.jpeg'
import show15 from './images/show5.jpeg'
import show16 from './images/show6.jpg'
import show17 from './images/show17.jpeg'
import show18 from './images/show8.jpeg'












function Home1() {
  const navigate = useNavigate();




  return (
    <div>
      <div className='home1  color-overlay'>
        <div className='welcome'><p>WELCOME</p></div>
        <div className='where'><p>Where moments become memories. Book your event today</p></div>
        <div><button className='home-book'><Link className='link-button' to="/signup" style={{ textDecoration: "none", backgroundColor: "none" }}> Book now</Link></button></div>


        <div className='transparent-div'>
          <h3>Our Services</h3>

          <div>
            <img className='bo-image' src={bo} alt="" />
            <p>Booking</p>
          </div>
          <div>
            <img className='mo-image' src={mo} alt="" />
            <p>Secure Payment</p>
          </div>
          <div>
            <img className='co-image' src={co} alt="" />
            <p>Customer Support</p>
          </div>
          <div>
            <img className='so-image' src={so} alt=" " />
            <p>Social Sharing</p>
          </div>
        </div>









        <div className='showcase'>
          <h1 className='events-heading'>Our Events</h1>
          <div className='cards'>
            <div className='card card1'>
              <img className='card-image' src={wo} alt='' />
              <div className='content'>
                <h2 style={{ marginLeft: "23px" }}>Marriage</h2>
                <p className='card-text' style={{ color: "black", marginLeft: "39px", fontSize: " 14px" }}>Two souls, one heart, a lifetime of love. Here's to forever and always cherishing each other, side by side.</p>
                <button className='card-button'><Link className='link-button2' to="/signup" style={{ textDecoration: "none", backgroundColor: "none", color: "white" }}> Book now</Link></button>
              </div>
            </div>
            <div className='card card2'>
              <img className='card-image' src={bday} alt='' />
              <div className='content'>
                <h2 style={{ marginLeft: "38px" }}>Birthday</h2>
                <p className='card-text' style={{ color: "black", marginLeft: "39px" }}>"Cheers to another year of life's adventures! Happy birthday, may it be unforgettable!"</p>
                <button className='card-button'><Link className='link-button2' to="/signup" style={{ textDecoration: "none", backgroundColor: "none", color: "white" }}> Book now</Link></button>
              </div>
            </div>
            <div className='card card3'>
              <img className='card-image' src={party} alt='' />
              <div className='content'>
                <h2 style={{ marginLeft: "23px" }}>Party</h2>
                <p className='card-text' style={{ color: "black", marginLeft: "39px" }}>"Dance, laugh, celebrate! Let's make memories that last a lifetime. Party time, let's go!"</p>
                <button className='card-button'><Link className='link-button2' to="/signup" style={{ textDecoration: "none", backgroundColor: "none", color: "white" }}> Book now</Link></button>
              </div>
            </div>
            <div className='card card4'>
              <img className='card-image' src={meh} alt='' />
              <div className='content'>
                <h2 style={{ marginLeft: "33px" }}>Mehandi</h2>
                <p className='card-text' style={{ color: "black", marginLeft: "39px" }}>"Colors of joy, artistry in bloom. Celebrate love and beauty in this mehndi room."</p>
                <button className='card-button'><Link className='link-button2' to="/signup" style={{ textDecoration: "none", backgroundColor: "none", color: "white" }}> Book now</Link></button>
              </div>
            </div>
            <div className='card card5'>
              <img className='card-image' src={eng} alt='' />
              <div className='content'>
                <h2 style={{ marginLeft: "39px" }}>Engagement</h2>
                <p className='card-text' style={{ color: "black", marginLeft: "50px" }}>"Two hearts unite, love ignites. Forever begins with this beautiful engagement. Cheers to love!"</p>
                <button className='card-button'><Link className='link-button2' to="/signup" style={{ textDecoration: "none", backgroundColor: "none", color: "white" }}> Book now</Link></button>
              </div>
            </div>
          </div>
        </div>










        <div className='icons' style={{ display: "flex" }}>
          <i class="fa fa-users fa-3x"></i>
          <i class="fa fa-heart fa-light fa-3x"></i>
          <i class="fa fa-globe fa-3x"></i>
          <i class="fa fa-briefcase fa-3x"></i>
        </div>

        <div className='plus'>
          <h2>1000+</h2>
          <h2 style={{ marginLeft: "240px" }}>100+</h2>
          <h2 style={{ marginLeft: "250px" }}>10+</h2>
          <h2 style={{ marginLeft: "230px" }}>2+ Years</h2>
        </div>

        <div className='cont'>
          <p style={{ marginLeft: "210px" }}>People Talking about us</p>
          <p style={{ marginLeft: "160px" }}>Events Organised</p>
          <p style={{ marginLeft: "180px" }}>Destinations Covered</p>
          <p style={{ marginLeft: "130px" }}>Industry Experience and Expertise</p>
        </div>







        <div >
          <h1 className='port'>Portfolio</h1>
          <Carousel interval={1000} className='caro'> 
            <Carousel.Item>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  className='d-block w-25 round-image carousel-img one'
                  src={one }
                  alt='First slide'
                  style={{ marginRight: "40px" }}
                />
                <img
                  className='d-block w-25 round-image carousel-img'
                  src={ two}
                  alt='Second slide'
                  style={{ marginRight: "40px" }}
                />
                <img
                  className='d-block w-25 round-image carousel-img'
                  src={three }
                  alt='Third slide'
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  className='d-block w-25 round-image carousel-img'
                  src={ four}
                  alt='First slide'
                  style={{ marginRight: "40px" }}
                />
                <img
                  className='d-block w-25 round-image carousel-img'
                  src={ five}
                  alt='Second slide'
                  style={{ marginRight: "40px" }}
                />
                <img
                  className='d-block w-25 round-image carousel-img'
                  src={ six}
                  alt='Third slide'
                />
              </div>
            </Carousel.Item>
          <Carousel.Item>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  className='d-block w-25 round-image carousel-img'
                  src={ seven}
                  alt='First slide'
                  style={{ marginRight: "40px" }}
                />
                <img
                  className='d-block w-25 round-image carousel-img'
                  src={ eight}
                  alt='Second slide'
                  style={{ marginRight: "40px" }}
                />
                <img
                  className='d-block w-25 round-image carousel-img'
                  src={ nine}
                  alt='Third slide'
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  className='d-block w-25 round-image carousel-img one'
                  src={ten }
                  alt='First slide'
                  style={{ marginRight: "40px" }}
                />
                <img
                  className='d-block w-25 round-image carousel-img'
                  src={ eleven}
                  alt='Second slide'
                  style={{ marginRight: "40px" }}
                />
                <img
                  className='d-block w-25 round-image carousel-img'
                  src={twelve }
                  alt='Third slide'
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>







        <h1 className='case'>Show Case</h1>

        <div className='show'>
          <img className='aa' style={{ width: "280px", marginLeft: "170px" }} src={show11} />
          <img className='aa' style={{ marginLeft: "19px" }} src={show12} />
          <img className='aa' style={{ marginLeft: "19px" }} src={show13} />
          <img className='aa' style={{ marginLeft: "19px" }} src={show14} />
        </div>

        <div>
          <img className='bb' src='https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2018/12/Moving-Pictures.jpg' />
        </div>

        <div className='show2'>
          <img className='aa' style={{ marginLeft: "170px", width: "280px" }} src={show15} />
          <img className='aa' style={{ marginLeft: "28px" }} src={show16}/>
          <img className='aa' style={{ marginLeft: "19px", width: "270px" }} src={show17} />
          <img className='aa' style={{ marginLeft: "19px", width: "273px" }} src={show18} />
        </div>





        <div className='iconss'>
  <i className='ico fa-brands fa-whatsapp fa-2x' style={{ color: "" }}></i>
  <i className='ico fa-brands fa-facebook fa-2x' style={{ color: "" }}></i>
  <i className='ico fa-brands fa-instagram fa-2x' style={{ color: "" }}></i>
  <i className='ico fa-brands fa-twitter fa-2x' style={{ color: "" }}></i>
</div>



        

        <div className='footerdiv'>
          <footer className='footer1'>

            <img style={{ marginRight: "-290px" }} src="https://www.weddingwire.in/assets/img/footer/appstore.png" srcset="https://www.weddingwire.in/assets/img/footer/appstore@2x.png 2x" alt="App Store" width="140" height="42" loading="lazy"></img>
            <img style={{ marginRight: "50px" }} src="https://www.weddingwire.in/assets/img/footer/googleplay.png" srcset="https://www.weddingwire.in/assets/img/footer/googleplay@2x.png 2x" alt="Google Play" width="140" height="42" loading="lazy"></img>

            <div style={{ marginLeft: "540px", color: "white", fontSize: "22px", display: "flex" }}>
              <h2>EWAYZ</h2>
              <h5 style={{ marginLeft: "400px" }}>Follow us on</h5>
            </div>

            <div style={{ display: "flex", marginLeft: "1020px", gap: "10px" }}>
              <i class="fa-brands fa-whatsapp fa-xl" style={{ color: "white" }}></i>
              <i class="fa-brands fa-facebook fa-xl" style={{ color: "white" }} ></i>
              <i class="fa-brands fa-instagram fa-xl" style={{ color: "white" }}></i>
              <i class="fa-brands fa-square-twitter fa-xl" style={{ color: "white" }}></i>
              <i class="fa-brands fa-youtube fa-xl " style={{ color: "white" }}></i>
            </div>

            <div style={{ lineHeight: "1" }}>
              <p style={{ color: "white", marginLeft: "510px" }}>kannur 4, 776 32 kerala</p>
              <p style={{ color: "white", marginLeft: "527px" }}>+46 225 410 22</p>
              <p style={{ color: "white", marginLeft: "520px" }}>support@ewayz.se</p>

            </div>

            <p className='paraa' style={{ color: "white", fontSize: "14px", marginTop: "00px" }}> An event registration website for all occasions | How to plan an event | Event Management Software | 8 Ways to Make the Most Out of Your Ticketing System | Event ticketing | Event Planning – Master <br />
              the Process | Event manager | Event organizer | Event marketing services for organizing and marketing an event | 10 Tips for Hosting an Online Event | Zoom Webinar and Meeting with Magnets event <br />
              platform | Free Online Event Invitations and RSVP tracking – 10 great tips | Free event planning website for all events | Festival management software for live events | An event scheduling software that <br />
              handles everything? | Searching for a free event registration app? | Event planning software free of charge | Free event registration app | Free event booking system | Private: Best event planning app | <br />
              How to organize an event | Meeting, planning, event manager – what to use? | Conference planning software – free | Looking for the best event planning apps? | Which is the best free mobile ticketing
            </p>
            <p style={{ color: "white", fontSize: "14px", marginTop: "-15px", marginLeft: "570px" }}>service?</p>

          </footer>
        </div>


      </div>
    </div>

  )
}

export default Home1