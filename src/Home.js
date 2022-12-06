
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Axios from 'axios'
import { useState, useEffect } from "react";
import Header from './Header'
import Upper from './Upper'

function Employee(props) {
    const [Articles , setArticles]= useState([])


    
      const fetchData = () => {
        return Axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-11-05&sortBy=publishedAt&apiKey=e9d61b01f38645f480eb46409ddee1b7")
              .then((response) => setArticles(response.data.articles.filter((v,i) => i > 4)));
      }
    
      useEffect(() => {
        fetchData();
        
        console.log(Articles)
      },[])

  return (
    <div className="container containers hidden">
        <Header />
        <Upper />
        <div>
            <div className="row mt-3">
            <h1 className="mb-5">Recent Articles</h1>
            {Articles && Articles.length > 0 && Articles.map((article, index) => (
                <div className="col-12 col-md-6 col-lg-4 border-u">
                    <div className="cards mb-5">
                        <img className="image" src={article.urlToImage}></img>
                        <p className="mt-3">{article.publishedAt}</p>
                        <h3 className="title">{article.title}</h3>
                        <p>{article.content}</p>
                    </div>
                    
                </div>
                
            ))}
            
        </div>
        </div>
    </div>
  )
}

export default Employee