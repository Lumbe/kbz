import React from 'react'
import Slider from 'react-slick'
import {Button} from 'react-bootstrap'
import './firstScreen.scss'
import './slick-slider-theme.scss'
import Background1 from './background1.jpg'
import Background2 from './background2.jpg' // TODO: upload real img
import Background3 from './background3.jpg' // TODO: upload real img
import Background4 from './background4.jpg' // TODO: upload real img
import FaIcon from '@fortawesome/react-fontawesome'

class FirstScreen extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.setActiveSlide = this.setActiveSlide.bind(this);
    this.state = {slides: 4, activeSlide: 1}
  }

  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }

  setActiveSlide(index) {
    let slidesCount = this.state.slides;
    index > slidesCount ? this.setState({activeSlide: 1}) : this.setState({activeSlide: index})
  }

 render() {
   const images = [Background1, Background2, Background3, Background4];
   const slidesCount = this.state.slides;
   const activeSlide = this.state.activeSlide;
   const sliderSettings = {
     arrows: false,
     dots: true,
     dotsClass: 'slick-thumb',
     infinite: true,
     speed: 800,
     slidesToShow: 1,
     slidesToScroll: 1,
     responsive: [
       { breakpoint: 1200, settings: { dots: false }}
     ],
     customPaging: function(i) {
       return <div className="img-thumb" style={{backgroundImage: `url(${images[i]})`}}>
         <div className="cover" />
         <FaIcon icon="plus" className="plus-icon"/>
       </div>
     },
     afterChange: (newIndex) => this.setActiveSlide(newIndex + 1)
   };
   return (
     <div className="first-screen" style={{minHeight: '600px'}}>
       <Slider
         ref={c => this.slider = c }
         {...sliderSettings}
       >
         <div className="slide-item">
           <div className="bg-img" style={{backgroundImage: `url(${Background1})`}}/>
           <div className='bg-square'>
             <div className="bg-bottom-line" />
           </div>
           <div className=" heading-text">
             <div className="slider-brand hidden-sm hidden-xs"><span className="decorated">Комфорт без забот</span></div>
             <h1><span className="first-word">Сервисное</span> обслуживание</h1>
             <h3>домов, коттеджей и коммерческих зданий</h3>
             <Button bsStyle="primary" className="btn-line">Подробнее</Button>
           </div>
         </div>
         <div className="slide-item">
           <div className="bg-img" style={{backgroundImage: `url(${Background2})`}}/>
           <div className='bg-square'>
             <div className="bg-bottom-line" />
           </div>
           <div className=" heading-text">
             <div className="slider-brand hidden-sm hidden-xs"><span className="decorated">Комфорт без забот</span></div>
             <h1>Сервисное обслуживание</h1>
             <h3>домов, коттеджей и коммерческих зданий</h3>
             <Button bsStyle="primary" className="btn-line">Подробнее</Button>
           </div>
         </div>
         <div className="slide-item">
           <div className="bg-img" style={{backgroundImage: `url(${Background3})`}}/>
           <div className='bg-square'>
             <div className="bg-bottom-line" />
           </div>
           <div className=" heading-text">
             <div className="slider-brand hidden-sm hidden-xs"><span className="decorated">Комфорт без забот</span></div>
             <h1>Сервисное обслуживание</h1>
             <h3>домов, коттеджей и коммерческих зданий</h3>
             <Button bsStyle="primary" className="btn-line">Подробнее</Button>
           </div>
         </div>
         <div className="slide-item">
           <div className="bg-img" style={{backgroundImage: `url(${Background4})`}}/>
           <div className='bg-square'>
             <div className="bg-bottom-line" />
           </div>
           <div className=" heading-text">
             <div className="slider-brand hidden-sm hidden-xs"><span className="decorated">Комфорт без забот</span></div>
             <h1>Сервисное обслуживание</h1>
             <h3>домов, коттеджей и коммерческих зданий</h3>
             <Button bsStyle="primary" className="btn-line">Подробнее</Button>
           </div>
         </div>
       </Slider>
       <div className='slider-buttons'>
         <button className='btn-left' onClick={this.previous}>
           <FaIcon icon="long-arrow-alt-left" size="lg" style={{marginRight: "10px"}}/>
           Назад
         </button>
         <div className="slide-counter hidden-xs">
           0{activeSlide} / 0{slidesCount}
         </div>
         <button className='btn-right' onClick={this.next}>
           Вперед
           <FaIcon icon="long-arrow-alt-right" size="lg" style={{marginLeft: "10px"}}/>
         </button>
       </div>
     </div>
   )
 }
}

export default FirstScreen
