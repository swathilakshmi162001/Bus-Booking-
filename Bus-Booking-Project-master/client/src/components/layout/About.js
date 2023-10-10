import React, { Fragment } from 'react'

const about = () => {
  return (
    <Fragment>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Catamaran:wght@500&family=Old+Standard+TT:wght@700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <header className="header">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-12 text-center">
              <h1><strong>Welcome to Swathi'S Bus Travels</strong></h1>
              <p>
               My travell is very spl bcz ur journey was very enjoysables.
               and memories.
              </p>
              <button className="btn btn-primary">Start Connecting !</button>
            </div>
          </div>
        </div>
      </header><br></br>
      <section className="message py-5">
        <div className="container text-center">
          <h1>We've got what you need!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic est
            quis et iure tempora minima similique amet cum commodi id rerum,
            in non doloremque veniam accusamus distinctio, at animi ea

          </p>
          <button className="btn btn-primary">Check it out!</button>
        </div>
      </section>
      <section className="services">
        <div className="container text-center1 py-5">
          <h1>About our services</h1>

          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fa fa-bar-chart myicon"></i>
                  <h1>Travel Agent Saranya</h1>
                  <p>
                  We planned a Honeymoon trip to Kerala and we don`t know how to execute that and my colleague suggested me.
                  Really a Smooth and Great Service .
                  First 
                   Thank you for all your support throughout the Trip. Thank you
                    Link:- Saranya@gmail.com
                  </p>
                  <button className="btn btn-primary" href="bus-business.herokuapp.com">Visit Site</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fa fa-bell-o myicon"></i>
                  <h1>Best Travels In india</h1>
                  <p>
When do you want to travel across the world on the road and got confused about planning how to go?
 We are right available for you to provide you with the best travel experience at an affordable price.
 It does not stop just with this we also provide many other rentals and services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fa fa-braille myicon"></i>
                  <h1>Best Explanation</h1>
                  <p>
                  Travels provides all auxiliary travel services as required along with our 24 Hours back up service through the customer service help desk.
                   Ever since its commencement, Rpk Travels had turned out to be one of the most
                    innovative Car Rental Service 
                swathi Travels, one of the leading Car rental company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="message py-5">
        <div className="container text-center">
          <h1>Register and start !!</h1>
          <p>
          travels in service for years in Coimbatore assuring safety and secured travel journey for the customers. 
          We work round the clock and ensure that your journey with us is fulfilling.
           We provide various services in around Coimbatore to comfort you with the travel experience on road.
          </p>
          <button className="btn btn-primary">Register</button>
        </div>
      </section>

      <section >
        <div className="container text-center">
          <h1>Let's Get In Touch!</h1>
          <p>
            Ready to start your next project with us? Give us a call or send us an
            email and we will get back to you as soon as possible!
          </p>
          <i className="fa fa-phone myicon text-warning"></i>
          <i className="fa fa-heart myicon text-danger"></i>
          <p>9344957437</p>
          <p>swathilakshmi162001@gmail.com</p>
        </div>
      </section>

      <section className="message py-5">
        <div className="container text-center">
          <h1>Visit My Links</h1>
          <div className="container">

            <div className="col-md-12">
              <p>https://www.facebook.com</p>

              <p>https://www.instagram.com</p>

              <p>https://www.google.com</p>

              <p>https://www.twitter.com</p>

            </div>
          </div>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </section>
      <section className="footer bg-dark">
        <div className="container py-5 text-white text-center">
          <p>Copyright © 2023 - SWATHI'S Pvt Ltd.</p>
        </div>
      </section>

    </Fragment>
  )
}

export default about