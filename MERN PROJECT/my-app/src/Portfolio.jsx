import React from 'react';
import './portfolio.css';
import logo from './images/logo1.png';

function Portfolio() {
  return (
    <div>
      <div className="portfolio">
        <div className="header">
          <img
            className="falling-logo"
            src={logo}
            alt="Ewayz Logo"
            height="59"
            style={{
              borderRadius: "38px 0px 38px 0px",
              display: "block",
              margin: "0 auto 20px",
              border: "3px solid black",
              animation: "fallFromAbove 1.1s ease-out",
            }}
          />


          <h1 className="title" style={{ animation: "fallFromAbove 0.6s ease-out" }}>
            Ewayz - Event Booking Website
          </h1>
          <p className="description">Welcome to the portfolio page for Ewayz, an event booking website designed to make event planning easier and more efficient. Explore the features and design of Ewayz below.</p>
        </div>
        <div className="features">
          <div className="feature">
            <img src="https://media.istockphoto.com/id/1350595566/photo/cyber-security-firewall-interface-protection-concept-businesswoman-protecting-herself-from.webp?b=1&s=170667a&w=0&k=20&c=wS9GoTWBNfsZVdO3FXZjogi9YrRRdBH_sqe6NjJrJ2U=" alt="Feature 1" className="feature-image" />
            <div className="feature-content">
              <h2>User Authentication</h2>
              <p>Ewayz provides secure user authentication to allow users to create accounts, log in, and access personalized features such as booking history and saved events.</p>
            </div>
          </div>

          <div className="feature">
            <img src="https://media.istockphoto.com/id/1176623055/photo/close-up-on-employee-man-hand-using-finger-pointing-schedule-on-calendar-to-make-appointment.jpg?s=612x612&w=0&k=20&c=Q4jWwLIlM_T_AX2GrX0lZYf4S2oPjqG9Txlsbn7w1vU=" alt="Feature 2" className="feature-image" />
            <div className="feature-content">
              <h2>Event Booking</h2>
              <p>With Ewayz, users can browse and book events seamlessly. The website offers a wide range of events, from conferences to concerts, with easy booking options and secure payment processing.</p>
            </div>
          </div>

          <div className="feature">
            <img src="https://media.istockphoto.com/id/1334906074/photo/web-designer-working-with-multiple-devices.jpg?s=612x612&w=0&k=20&c=QZ0pu9OMddCujWq3_a1OZSEILKSmONxpY-aCQ2mwCkw=" alt="Feature 3" className="feature-image" />
            <div className="feature-content">
              <h2>Responsive Design</h2>
              <p>Ewayz is designed with a responsive layout, ensuring that users can access the website and book events from any device, including smartphones, tablets, and desktop computers.</p>
            </div>
          </div>

          <div className="feature">
            <img src="https://media.istockphoto.com/id/1961788024/photo/mobile-banking-app.jpg?s=612x612&w=0&k=20&c=YEXCV6qdzK9b6EhG-MoQdGO9VENNNhDnNziHOuPuOPc=" alt="Secure Payment" className="feature-image" />
            <div className="feature-content">
              <h2>Secure Payment</h2>
              <p>With EWAYZ, your payment is secure. We use the latest encryption technology to ensure your transactions are safe and protected.</p>
            </div>
          </div>
        </div>





        <div className="design">
          <h1 className='title-2'>Design</h1>
          <p>Ewayz features a modern and user-friendly design, with a clean and intuitive interface. The website's design focuses on providing a seamless user experience, from browsing events to completing bookings.The overall design of Ewayz is centered around providing a seamless user experience. From the moment users land on the website to the completion of their booking, every aspect is designed to be intuitive and efficient. Clear calls-to-action and informative content
            ensure that users can easily find the information they need.Important features are prominently displayed, making it simple for users to find and book events.Every aspect of Ewayz's design is carefully crafted, with attention to detail. From the placement of elements to the use of animations and transitions, every detail contributes to a cohesive and engaging user experience.</p>
        </div>
      </div>

      <div className="portfolio-container">
        <h1>EVENT PORTFOLIO</h1>
        <div className="portfolio-images">
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.unsplash.com/photo-1603298576121-586c2d880e59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHdlZGRpbmclMjByZWNlcHRpb258ZW58MHx8MHx8fDA%3D" alt="Image 4" />
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.unsplash.com/photo-1427477321886-abc24e8ce923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHx3ZWRkaW5nJTIwcmVjZXB0aW9ufGVufDB8fDB8fHww" alt="Image 5" />
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.pexels.com/photos/169191/pexels-photo-169191.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 6" />
        </div>


        <div className="portfolio-images">
          <img style={{ marginLeft: "100px" }} className="portfolio-image" src="https://images.pexels.com/photos/5775055/pexels-photo-5775055.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 4" />
          <img style={{ marginLeft: "100px" }} className="portfolio-image" src="https://media.istockphoto.com/id/1005952596/photo/rustic-light-bulb-garden-lights.jpg?s=612x612&w=0&k=20&c=usEqCwb8uuknVzfqLIsluiQhlYEy0LhCdY2Q8TRdW-E=" alt="Image 5" />
          <img style={{ marginLeft: "100px" }} className="portfolio-image" src="https://images.pexels.com/photos/1813496/pexels-photo-1813496.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 4" />

        </div>

        <div className="portfolio-images">
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.unsplash.com/photo-1515626553181-0f218cb03f14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8MzY2MTc1Mnx8ZW58MHx8fHx8" alt="Image 4" />
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.pexels.com/photos/2253831/pexels-photo-2253831.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 5" />
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.pexels.com/photos/431722/pexels-photo-431722.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 6" />
        </div>

        <div className="portfolio-images">
          <img style={{ marginLeft: "100px" }} className="portfolio-image" src="https://images.pexels.com/photos/3036525/pexels-photo-3036525.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 4" />
          <img style={{ marginLeft: "100px" }} className="portfolio-image" src="https://images.pexels.com/photos/587739/pexels-photo-587739.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 5" />
          <img style={{ marginLeft: "100px" }} className="portfolio-image" src="https://media.istockphoto.com/id/1417570876/photo/various-types-of-seafood-in-a-restaurant-in-taipei-taiwan.jpg?s=612x612&w=0&k=20&c=cY45tlwRl0gAKrEP08dLNda7KFvmuzVNn1_iv8C06dw=" alt="Image 6" />
        </div>

        <div className="portfolio-images" >
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.pexels.com/photos/1682462/pexels-photo-1682462.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 6" />
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 5" />
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.pexels.com/photos/3309877/pexels-photo-3309877.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 6" />
        </div>



        <div className="portfolio-images">
          <img style={{ marginLeft: "100px" }} className="portfolio-image" src="https://images.pexels.com/photos/6210765/pexels-photo-6210765.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 4" />
          <img style={{ marginLeft: "100px" }} className="portfolio-image" src="https://images.pexels.com/photos/4791745/pexels-photo-4791745.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 5" />
          <img style={{ marginLeft: "100px" }} className="portfolio-image" src="https://images.pexels.com/photos/12689145/pexels-photo-12689145.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 6" />
        </div>


        <div className="portfolio-images" >
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 6" />
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.pexels.com/photos/14161103/pexels-photo-14161103.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 5" />
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 6" />
        </div>


        <div className="portfolio-images">
          <img style={{ marginLeft: "100px" }} className="portfolio-image" src="https://images.pexels.com/photos/9703892/pexels-photo-9703892.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 4" />
          <img style={{ marginLeft: "100px" }} className="portfolio-image" src="https://images.pexels.com/photos/2306282/pexels-photo-2306282.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 5" />
          <img style={{ marginLeft: "100px" }} className="portfolio-image" src="https://images.pexels.com/photos/4639498/pexels-photo-4639498.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 6" />
        </div>


        <div className="portfolio-images" >
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.pexels.com/photos/378003/pexels-photo-378003.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 6" />
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://media.istockphoto.com/id/942176512/photo/holiday-buffet-table-served-by-different-canape-sandwiches-snacks-ready-for-eating-in.jpg?s=612x612&w=0&k=20&c=jOE5fv6DpuVyE8ldqKIwThvkkcsRWCMCh2yMgkyvD4w=" alt="Image 5" />
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.pexels.com/photos/15110335/pexels-photo-15110335/free-photo-of-decor-of-table-for-wedding-reception.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 6" />
        </div>


        <div className="portfolio-images">
          <img style={{ marginLeft: "100px" }} className="portfolio-image" src="https://media.istockphoto.com/id/1280235861/photo/cup-on-a-stand-on-the-festive-table-with-pieces-of-sugar-next-to-it.jpg?s=612x612&w=0&k=20&c=60IwOifAdJmKsSfqj5BQBEwNENZ6IYTCw7FIlMSIcVw=" alt="Image 4" />
          <img style={{ marginLeft: "100px" }} className="portfolio-image" src="https://images.pexels.com/photos/6308/food-holiday-love-holidays.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 5" />
          <img style={{ marginLeft: "100px" }} className="portfolio-image" src="https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 6" />
        </div>


        <div className="portfolio-images" >
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.pexels.com/photos/12689150/pexels-photo-12689150.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 6" />
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.pexels.com/photos/2544826/pexels-photo-2544826.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 6" />
          <img style={{ marginLeft: "-100px" }} className="portfolio-image" src="https://images.pexels.com/photos/5979418/pexels-photo-5979418.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 6" />
        </div>


      </div>

      <div style={{ marginBottom: "70px" }}></div> 


      <div className='footerdiv' >
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
            <p style={{ color: "white", marginLeft: "520px" }}>support@ewayz.com</p>

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
  );
}

export default Portfolio;
