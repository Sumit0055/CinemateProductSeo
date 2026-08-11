import React from 'react'
import bg_6 from '@/assets/images/service/bg_6.jpg'
import Image from 'next/image'

export default function Service() {
  return (
    <>
    <section className="ftco-section-2 mb-3" id="services">
	      <div className="container-fluid">
	        <div className="section-2-blocks-wrapper d-flex row no-gutters">
	          {/* <div className="img col-md-6 ftco-animate" style={{ backgroundImage: `url(${bg_6})` }}>
	          </div> */}
			  <Image
	            src={bg_6}
	            alt="Service 6"
				height={720}
				width={500}
	            className="img col-md-6 ftco-animate"
	          />
	          <div className="text col-md-6 ftco-animate">
	            <div className="text-inner align-self-start">
	              
	              <h3 className="heading">Our services</h3>
	              <div className="services d-flex ftco-animate">
	              	<div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-quality"></span></div>
	              	<div className="info ml-4">
	              		<h3>Fashion Shows</h3>
	              		<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
	              	</div>
	              </div>
	              <div className="services d-flex ftco-animate">
	              	<div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-megaphone"></span></div>
	              	<div className="info ml-4">
	              		<h3>Corporate Events</h3>
	              		<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
	              	</div>
	              </div>
	              <div className="services d-flex ftco-animate">
	              	<div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-shopping-bag"></span></div>
	              	<div className="info ml-4">
	              		<h3>Commercial Photo Shots</h3>
	              		<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
	              	</div>
	              </div>
	              <div className="services d-flex ftco-animate">
	              	<div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-photo-camera"></span></div>
	              	<div className="info ml-4">
	              		<h3>Exhibitions/Trade Shows Shows</h3>
	              		<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
	              	</div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>
    </>
  )
}
