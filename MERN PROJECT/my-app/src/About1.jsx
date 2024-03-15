import React from 'react'
import './about1.css'
import about from './images/about.png'


function About1() {
  return (
    <div >

      <div className='linear'>
        <img className='map' src={about} alt="" />
        <h1 className='heading'>You take care of your attendees. We'll take care of the</h1>
        <h1 className='heading2'>  technical details</h1>
        <h5 className='head3'>HELPING YOU TO PLAN SUCCESSFUL EVENTS</h5>

        
        <h2 className='head4'>ABOUT EWAYZ</h2>

        <div >
          <h3 className='head5'>What drives us?</h3><br />
          <p className='pa1'><u>EWAYZ</u>  is built and created by the Muhammed a web developer,Kannur. , our aim is to develop products that make a difference for you <br /> in your daily life and that you’re really happy with. We also want our staff to really enjoy themselves and have fun together. And, we want <br /> to do good in the community. To put it simply, we’re passionate about doing good things!</p>
        </div>

        <div>
          <h3 className='head6'>What is EWAYZ?</h3>
          <p className='pa2'> <u>EWAYZ</u> is our event tool. It suits any context where you invite participants and need to receive guest registrations. <u>EWAYZ</u> is filled <br /> with easy-to-use and clever features that help you to create stylish and marketable events in no time at all. It’s a perfect fit, <br /> whether you’re organising large or small events.</p>
        </div>

        <div>
          <h3 className='head7'>What difference can our platforms make for you?</h3>
          <p className='pa3'>We ask our existing customers the same question. They answer that <u>EWAYZ</u> everyday life, save time, and lower costs for them. But, also that <br /> the tools help to strengthen the the relationship between you and your participants. In addition, many customers say that they <br /> see a steadily increasing conversion rate since starting to use our products.</p>
        </div>

        <div>
         <h3 className='head8'>Why Ewayz</h3>
         <p className='pa4'>Beacuse <u>EWAYZ</u> provide customers the best and they can arrange the events according to their needs </p>
         <ul className='ul'>
          <li>Marriage</li>
          <li>Birthday</li>
          <li>Engagment</li>
          <li>Party</li>
         </ul>
        </div>

        <div className='footerdiv1'>
          <footer className='footer11'>

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
              <p style={{ color: "white", marginLeft: "490px" }}>kannur 4, 776 32 kerala</p>
              <p style={{ color: "white", marginLeft: "520px" }}>+46 225 410 22</p>
              <p style={{ color: "white", marginLeft: "510px" }}>support@ewayz.se</p>

            </div>

            <p className='paraa1' style={{ color: "white", fontSize: "14px", marginTop: "00px" }}> An event registration website for all occasions | How to plan an event | Event Management Software | 8 Ways to Make the Most Out of Your Ticketing System | Event ticketing | Event Planning – Master <br />
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

export default About1