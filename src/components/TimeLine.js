import React, { Component } from 'react'
import point_img from '../assets/point.png'

export class TimeLine extends Component {
    constructor(props){
        super(props);

        this.time_period_list = new Array(20);
        for(var i=0; i<this.time_period_list.length; i++){
            this.time_period_list[i] = 2000+i;
        }
    }

    getTimelineElement(){
        const time_periods = []
        for(const[index, value] of this.time_period_list.entries()){
            time_periods.push(
                <div className="swiper-wrapper" key={index}>
                    <p>{value}</p>
                    <div className="point-wrapper">
                        <img src={point_img} alt="point" className="point-img"></img>
                    </div>
                </div>
            )
        }
        return time_periods;
    }

    render() {
        const time_periods = this.getTimelineElement();
        return (
        <div className="timeline-container">
            <div className="carousel">
                {time_periods}
            </div>
        </div>
        )
    }
}

export default TimeLine
