import React from 'react'
import { Carousel } from 'bootstrap';


const Content = () => {
  return (

    <div id="fig">
      <p className="mt-4 mb-5"><center>
        Epic Games:An American Video Game And Software Developer<br/>
        And Publisher Based in Cary,North Carolina. </center></p>
<div
  id="carouselExampleControls"
  className="carousel slide"
  data-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="Images/fortnite_2021.jpg" alt="First slide" height="450px"  width="300px" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="I" alt="Second slide" height="450px"  width="300px" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="" alt="Third slide" height="450px"  width="300px" />
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleControls"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleControls"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

        {/* sec secn */}
        <section className="bg-light" id="about">
  <div className="container">
    <div className="row">
      
    </div>
    <div className='back'>
    {/* <div className="row"> */}
    <div className='ba'>
      <p className="mt-4 mb-5">
        Create ,play,and battle with friends for free in fornite.be the last player standing in battle and zero
        build,experience a concert or live event,or discover over a million creator made games,including racing...
      </p></div>
      <center>
      <button type="button" class="btn btn-light">Visit Website</button></center>
    </div></div>
  {/* </div> */}
</section>

        
       

       

    {/* last secn */}
       <section className="bg-light mt-5" id="tourist">
  <div className="container">
  <div className='back'>

    <div className="row text-center">
      <div className="col-sm-12 col-md-12 mb-4">
      </div>
      <div className="col-md-4">
        <div className="testimonial mb-5">
          <div className="avatar mx-auto">
          <img src="Images/one.png" className="card-img-top" alt="..." />

          </div>
          <p className="font-weight-normal dark-grey-text">
            Explore Large,Destructible Environment where no two games are ever the same
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="testimonial mb-5">
          <div className="avatar mx-auto">
          <img src="Images/one.png" className="card-img-top" alt="..." />

          </div>
          <p className="font-weight-normal dark-grey-text">
           Team up with friends by sprinting,climbing and smashing your way to earn your victory royalr
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="testimonial mb-5">
          <div className="avatar mx-auto">
          <img src="Images/one.png" className="card-img-top" alt="..." />

          </div>
          <p className="font-weight-normal dark-grey-text">
            Discover even more ways to play across thousands of creator-made games genres
          </p>
        </div>
     

      </div>
    </div>
  </div>
  </div>
</section>
<section className="" id="destinations">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-12">
        <h3 className="text-center mt-4 text-secondary">
Our contribution </h3>
<p>Our core offering extends beyond mere profit generation hbjbvnnnnnnnnnnnnnn ftgydhjkm</p>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4 mb-5">
        <div className="card mt-4">
          <img className="card-img-top" src="Images/ig-3.jpg" alt="" />
          <div className="card-body" >
            <h4 className="card-title text-secondary">5M</h4>
            <p className="card-text text-secondary">
             Daily user engagements
            </p>
          </div>
          
        </div>
      </div>
      <div className="col-sm-4 mb-5">
        <div className="card mt-4">
          <img className="card-img-top" src="Images/t-2.jpg" alt="" />
          <div className="card-body">
            <h4 className="card-title text-secondary">$500K</h4>
            <p className="card-text text-secondary">
              Revenue Surge for an platform
            </p>
          </div>
          
        </div>
      </div>
      <div className="col-sm-4 mb-5">
        <div className="card mt-4">
          <img className="card-img-top" src="Images/t-1.jpg" alt="" />
          <div className="card-body">
            <h4 className="card-title text-secondary">10X</h4>
            <p className="card-text text-secondary">
              ROAS on all marketing campaigns
            </p>
          </div>
          
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-12">
        <h3 className="text-center mt-4 text-secondary">
Interested in delving deeper into the project? </h3>
<p>if u would like to explore further details about our initiative of any of our affiliated brands,dont hesitate to connect</p><br/>

<div className='butn'>
  <center><button type="button" class="btn btn-dark">Visit Website</button>&nbsp;&nbsp;&nbsp;&nbsp;
<button type="button" class="btn btn-light">Visit Website</button> </center> </div>

      </div>
      <h6 className="text-white text-center mb-3 mt-3">@2019-2023 abcTechnology Solutions Pvt.Ltd All Rights Reserved
        </h6>
  </div>
</section>

        
    </div>
  )
}

export default Content