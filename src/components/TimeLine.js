import React, { Component } from 'react'
import point_img from '../assets/point.png'

export class TimeLine extends Component {
    constructor(props){
        super(props);

        const currentYear  = new Date().getFullYear();
        this.time_period_list = new Array(currentYear-2000);
        for(var i=0; i<this.time_period_list.length; i++){
            this.time_period_list[i] = 2001+i;
        }
    }

    getTimelineElement(){
        const time_periods = []
        for(const[index, date] of this.time_period_list.entries()){
            time_periods.push(
                <div className="swiper-wrapper" key={index}>
                    <p>{date}</p>
                    <div className="point-wrapper" onClick={()=>this.props.updateArticleFeed({date})}>
                        <img src={point_img} alt="point" className="point-img"></img>
                    </div>
                </div>
            )
        }
        return time_periods;
    }

    mouseScroll = (e) => {
        var container = document.getElementById('timeline-carousel')
        var containerScrollPosition = document.getElementById('timeline-carousel').scrollLeft
        container.scrollTo({
            top: 0,
            left: containerScrollPosition + e.deltaY,
            behaviour: 'smooth' //if you want smooth scrolling
        })
    }

    render() {
        const time_periods = this.getTimelineElement();
        return (
        <div className="timeline-container">
            <div className="carousel" id="timeline-carousel" onWheel={(e) =>{this.mouseScroll(e)}}>
                {time_periods}
            </div>
        </div>
        )
    }
}

export default TimeLine
