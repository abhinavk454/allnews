import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../styles/Pages.css'

function Technology() {
    const [news,setNews]=useState([]);
    useEffect(()=>{
        axios
        .get(`https://newsapi.org/v2/everything?q=Technology&apiKey=498ea298d85448b0b4efb9d95ffb002f`)
        .then((res)=>{
            setNews(res.data.articles)
        })
        .catch((err)=>{
            console.error(err)
        })
    },[])
    return (
        <div>
            {
                news.map(
                    (re,index)=><div className="inner" key={index}>
                    <article id="art">
                      <img id="img" src={re.urlToImage} alt="" />
                      <br />
                      <span id="sp1">{re.title}</span>
                      <br />
                      Author : {re.author}
                      <br />
                      Content : {re.content}
                      <br />
                      <a href={re.url} target="_blank" rel="noopener noreferrer">
                        For more
                      </a>
                      <br />
                      <span>By </span>: {re.source.name}
                      <br />
                      <span>Date </span>: {re.publishedAt}
                    </article>
                  </div>)
            }
        </div>
    )
}

export default Technology
