import React from 'react'
import './firstScreen.scss'
import Slider from 'react-slick'
import {Image} from 'react-bootstrap'
import Background1 from './background1.jpg'
import Background2 from './background2.jpg'
import Background3 from './background3.jpg'
import Background4 from './background4.jpg'

class FirstScreen extends React.Component {
 render() {
   const images = [null, Background1, Background2, Background3, Background4];
   const settings = {
     customPaging: function(i) {
       return <a><Image src={images[i+1]}/></a>
     },
     arrows: false,
     dots: true,
     dotsClass: 'slick-dots slick-thumb',
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1
   };
   return (
     <div className="first-screen">
       <Slider {...settings}>
         <div style={{position: 'relative'}}>
           <div className="background-1"/>
         </div>
         <div>
           <Image src={Background2} />
         </div>
         <div>
           <Image src={Background3} />
         </div>
         <div>
           <Image src={Background4} />
         </div>
       </Slider>
     </div>
   )
 }
}

export default FirstScreen
