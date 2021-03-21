import React, { Component } from 'react'

export class ArticleGallery extends Component {
    mouseScroll = (e) => {
        var container = document.getElementById('article-carousel')
        var containerScrollPosition = document.getElementById('article-carousel').scrollLeft
        container.scrollTo({
            top: 0,
            left: containerScrollPosition + e.deltaY,
            behaviour: 'smooth' //if you want smooth scrolling
        });

        // /* Disable default scrolling */
        // // Get the current page scroll position 
        // let scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
        // let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        // // if any scroll is attempted, 
        // // set this to the previous value
        // console.log(scrollTop);
        // console.log(scrollLeft);
        // window.onscroll = function() { 
        //     window.scrollTo(scrollLeft, scrollTop); 
        // }; 
    }

    render() {

        const article_display = [];
        for(var i=0;i<this.props.articles.length;i++){
            article_display.push(
            <div className="article-wrapper" key={this.props.articles[i].id}>
                <div className="content">
                    <p>{this.props.articles[i].date}</p>
                    <h1>{this.props.articles[i].title}</h1>
                    <p>{this.props.articles[i].description}</p>
                </div>
                <a href={this.props.articles[i].link} rel="noreferrer" target="_blank">
                    <div className="button-wrapper">link</div>
                </a>
            </div>
            );
        }

        return (
            <div className="article-gallery-container">
            <div className="carousel" id="article-carousel" onWheel={(e) => this.mouseScroll(e)}>
                {article_display}
            </div>
        </div>
        )
    }
}

export default ArticleGallery
