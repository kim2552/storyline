import React,{useState, useEffect} from 'react'
import axios from 'axios'

import ArticleGallery from './ArticleGallery'
import TimeLine from './TimeLine'
import KeywordInput from './KeywordInput'

const Home = () => {

    const [year, setYear] = useState("2001");
    const [search_input, setSearchInput] = useState("world events");

    const [articles,setArticles] = useState([]);

    function handleYearChange(newDate){
        setYear(newDate);
    }
    function handleSearchChange(newSearch){
        console.log("newSearch=",newSearch);
        setSearchInput(newSearch);
    }

    useEffect(() => {
        const updateArticleFeed = () =>{
            const date = year;
            console.log(search_input);
            const formatted_search = search_input.replace(/\s+/g, '+').toLowerCase();
            axios.get("/rss/search?q="+formatted_search+" after:"+date+"-01-01+before:"+date+"-12-30&hl=en-US&gl=US&ceid=US:en&gl=US")
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
        updateArticleFeed();
      }, [year, search_input]);

    return (
        <div className="container">
            <div className="header-wrapper">
                <h1>{year}</h1>
            </div>
            <ArticleGallery articles={articles}></ArticleGallery>
            <TimeLine handleYearChange={handleYearChange}></TimeLine>
            <div className="header-wrapper">
                <KeywordInput search_input={search_input} setSearchInput={setSearchInput} handleSearchChange={handleSearchChange}></KeywordInput>
            </div>
        </div>
    )
}

export default Home
