import React,{useState, useEffect} from 'react'
import axios from 'axios'

import ArticleGallery from './ArticleGallery'
import TimeLine from './TimeLine'

const Home = () => {

    const [year, setYear] = useState("2001");
    const [articles,setArticles] = useState([]);

    function updateArticleFeed(query){
        const date = query.date;
        axios.get("/rss/search?q=world+after:"+date+"-01-01+before:"+date+"-12-30&hl=en-US&gl=US&ceid=US:en&gl=US")
        .then(res =>{
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(res.request.response, "text/xml");
            const items = xmlDoc.getElementsByTagName("item");
            const article_items = []
            for(var i=0;i<items.length;i++){
                if(String(items[i].childNodes[3].innerHTML).includes(date)){
                    article_items.push({id:i,title: items[i].childNodes[0].innerHTML, description: items[i].childNodes[4].innerHTML, link: items[i].childNodes[1].innerHTML, date:items[i].childNodes[3].innerHTML})
                }
            }
            setArticles(article_items);
            setYear(date);
        }).catch( error => {
            console.log(error);
        });
    }

    useEffect(() => {
        updateArticleFeed({date: year});
      }, [year]);

    return (
        <div className="container">
            <div className="header-wrapper">
                <h1>{year}</h1>
            </div>
            <ArticleGallery articles={articles}></ArticleGallery>
            <TimeLine updateArticleFeed={updateArticleFeed}></TimeLine>
        </div>
    )
}

export default Home
