import React from 'react'
import './contact1.css'
import myimage from './images/myimage.jpg';
import contact from './images/contact.png'

function Contact1() {
  return (
    <div>

      <div className='line'>
        <img className='mapi' src={contact}/>
        <h1 className='he2'>  Event experiences! </h1>
        <h5 className='he3'>Get in touch. Let's craft unforgettable events together, starting now</h5>
      </div>

      <div >
   <h2 className='he4'>     CONTACT US</h2>
   <h5 className='he5'> Call us: +15 36 17 17 10 | Support: support@ewayz.com | Booking: book@ewayz.com</h5>
      </div> <br /><br />

    <div>
      <img className='me' src={myimage} alt="" /> <br /> 
      <h5 className='me1'>MUHAMMED</h5>
      <p className='me2'>MD & Founder</p>
      <p className='me3'> <u> Muhammed.@ewayz.com</u> </p>
    </div> <br /><br /><br />

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
  )
}

export default Contact1