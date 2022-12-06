
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
    <div className="mb-5">
        <div className="border-b ">
            <div className="">
                <h1 className="mt-5 mb-5">Featured Articles</h1>

            </div>
            
            <div className="row mt-3">
            {Articles && Articles.length > 0 && Articles.map((article, index) => (

            <> 
                { index == 0 && <div className="col-12 col-md-6 col-lg-6 ">
                        <div className=" mb-5">
                            <img className="big-image hvr-grow" loading="lazy" src={article.urlToImage}></img>
                            <p className="mt-3">{article.publishedAt}</p>
                            <h3 className="title">{article.title}</h3>
                            <p>{article.content}</p>
                        </div>
                    </div>}

            </>
            ))}
            <div className="col-12 col-md-5 offset-md-1">
            {Articles && Articles.length > 0 && Articles.map((article, index) => (

            <> 
            {index > 0 && <div >
                                <div className=" mb5 flex ">
                                    <img className="small-image mr-3 hvr-grow" loading="lazy" src={article.urlToImage}></img>
                                    <div className="ml-3">
                                        <p className="">{article.publishedAt}</p>
                                        <h5 className="sm-title">{article.title}</h5>
                                    </div>
                                    
                                </div>
                                <hr className="mb5" />
                                </div>
                            }

            </>
            ))}</div>

            
            
        </div>
        </div>
    </div>
  )
}

export default Employee