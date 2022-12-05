
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Axios from 'axios'
import { useState, useEffect } from "react";
import Header from './Header'

function Employee(props) {
    const [Articles , setArticles]= useState([])


    useEffect(()=>{
        Axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-11-05&sortBy=publishedAt&apiKey=e9d61b01f38645f480eb46409ddee1b7").then((data)=>{
            setArticles(data.data.articles.filter((v,i) => i < 4))
            console.log(Articles)
        });
        
        },[])

     

  return (
    <div className="">
        <div className="border-b">
            <div className="">
                <h1 className="mt-5 mb-5">Featured Articles</h1>

            </div>
            
            <div className="row mt-3">
            {Articles && Articles.length > 0 && Articles.map((article, index) => (

            <div className="col-12 col-md-6 col-lg-6 "> 
                { index == 0 && <div >
                        <div className="cards mb-5">
                            <img className="big_image" src={article.urlToImage}></img>
                            <p className="mt-3">{article.publishedAt}</p>
                            <h3 className="title">{article.title}</h3>
                            <p>{article.content}</p>
                        </div>
                    </div>}

                {index > 0 && <div className="col-12 col-md-6 col-lg-6 "><div >
                    <div className="cards mb-5">
                        <img className="small-image" src={article.urlToImage}></img>
                        <p className="mt-3">{article.publishedAt}</p>
                        <h3 className="title">{article.title}</h3>
                        <p>{article.content}</p>
                    </div>
                </div></div>
                }
            </div>
            ))}
            
        </div>
        </div>
    </div>
  )
}

export default Employee