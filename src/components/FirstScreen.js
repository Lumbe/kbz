import React from 'react'
import './firstScreen.scss'
import Slider from 'react-slick'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import Background1 from './background1.jpg'
import Background2 from './background2.jpg'
import Background3 from './background3.jpg'
import Background4 from './background4.jpg'

class FirstScreen extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this)
  }

  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
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
     speed: 800,
     slidesToShow: 1,
     slidesToScroll: 1
   };
   return (
     <div className="first-screen">
       <Row>
       <Grid fluid>
         <Row>
         <Col md={12}>
           <div className='slider-buttons'>
             <button className='btn btn-default' onClick={this.previous}>Previous</button>
             <button className='btn btn-default' onClick={this.next}>Next</button>
           </div>
           <Slider
             ref={c => this.slider = c }
             {...settings}
           >
             <div style={{position: 'relative'}}>
               <div className="bg-image-1"/>
               <div className='bg-square'>
                 <div className="bg-bottom-line" />
               </div>
               <div className=" heading-text">
                 <h3 className="hidden-xs"><span className="text-highlight">Комфорт без забот</span></h3>
                 <h1><span className="energy-header">Сервисное обслуживание</span></h1>
                 <h3>домов, коттеджей и коммерческих зданий</h3>
               </div>
             </div>
             <div style={{position: 'relative'}}>
               <div className="bg-image-1"/>
               <div className='bg-square'>
                 <div className="bg-bottom-line" />
               </div>
               <div className=" heading-text">
                 <h3 className="hidden-xs"><span className="text-highlight">Комфорт без забот</span></h3>
                 <h1><span className="energy-header">Сервисное обслуживание</span></h1>
                 <h3>домов, коттеджей и коммерческих зданий</h3>
               </div>
             </div>
             <div>
               <Image src={Background3} />
             </div>
             <div>
               <Image src={Background4} />
             </div>
           </Slider>

         </Col>
         </Row>
       </Grid>
       </Row>
     </div>
   )
 }
}

export default FirstScreen
