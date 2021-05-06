import React,{useState, useEffect} from 'react'
import axios from 'axios'

import ArticleGallery from './ArticleGallery'
import TimeLine from './TimeLine'
import KeywordInput from './KeywordInput'

const Home = () => {

    const saved_query = JSON.parse(localStorage.getItem('query'));

    let default_year = "2008";
    let default_search = "Taylor Swift"
    if(saved_query !== null){
        if(saved_query.year !== ""){
            default_year = saved_query.year;
            default_search = saved_query.search;
        }
    }

    const [year, setYear] = useState(default_year);
    const [search_input, setSearchInput] = useState(default_search);

    const [articles,setArticles] = useState([]);

    function handleYearChange(newDate){
        setYear(newDate);
    }

    useEffect(() => {
        const updateArticleFeed = () =>{
            localStorage.setItem('query', JSON.stringify({search: search_input, year: year}));

            const date = year;
            const formatted_search = search_input.replace(/\s+/g, '+').toLowerCase();
            axios.post("/api/retrieve_feed",{formatted_search,year})
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
            }).catch( error => {
                console.log(error);
            });
        }
        updateArticleFeed();
      }, [year, search_input]);

    return (
        <div className="container">
            <div className="header-wrapper">
                <h1 style={{fontSize: "2rem"}}>{year}</h1>
            </div>
            <ArticleGallery articles={articles}></ArticleGallery>
            <TimeLine handleYearChange={handleYearChange}></TimeLine>
            <div className="header-wrapper" style={{marginBottom: "1rem"}}>
                <KeywordInput search_input={search_input} setSearchInput={setSearchInput}></KeywordInput>
            </div>
        </div>
    )
}

export default Home
