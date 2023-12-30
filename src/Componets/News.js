import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import NewsItem  from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from 'moment';
import caticon from './fake-news.png'


const date= moment().format('MMMM Do YYYY');
const time =moment().format('LT');

<style>
@import url('https://fonts.googleapis.com/css2?family=Noticia+Text:ital,wght@1,700&display=swap');
</style>


const News = (props)=> {
  


  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults , setTotalResults] = useState(0);
//   document.title = `NewsMonkey - ${capitalize(props.category)}`;

 

 const  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  
  const  newsUpdate = async ()=> {

    props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
   setLoading(true);
   props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);


  }

 useEffect(()=>
 {
  newsUpdate();
 },[])
  // prevClick = async () => {
  //   // console.log("prevclick");
  //   // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}{props.page}${page-1}&pagesize=${props.pagesize}`;
  //   //  setLoading(true)
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   //  setPage(page-1)
 //    // setArticles(articles.concat(parsedData.articles));
  //   //    setLoading(false)

  //   // })
  //   setPage(page-1)
  //   newsUpdate();
  // };

  // nextClick = async () => {
  //   // console.log("nextclick");

  //   // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}{props.page}${page+1}&pagesize=${props.pagesize}`;
  //   //  setLoading(false)
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();
  //   //   
  //   //    setPage(page+1)
 //    // setArticles(articles.concat(parsedData.articles));
  //   //    setLoading(false)
  //   //     
  //   //  

  //   setPage(page+1)
  //   newsUpdate();
  // };

  const fetchMoreData = async () => {
  
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pagesize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults( parsedData.totalResults);
  };


    return (
      <>
   <div  className="container">
       <center><h1 style={{padding:"28px", fontFamily: "newsreader",marginTop:"55px" ,color:props.mode=='light'?'black':'white',fontWeight:"bolder" ,fontSize:"52px"}} >
          NewsMonkey - Top News Headlines
        </h1></center> 
        <hr style={{color:props.mode=='light'?'black':'white',border:"2px solid"}}></hr>
        <div className="d-flex justify-content-between">
        <h4 style={{color:props.mode=='light'?'black':'white'}} class="cat"><img class="caticon" src={caticon}></img> &nbsp;{capitalize(props.category)} Category</h4>
        <h5 style={{color:props.mode=='light'?'black':'white'}} class="date">{date},<br></br>{time}</h5>
        </div>

        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container ">
            <div className="row">
              {articles.map((element, index) => {
                const uniqueKey = `${element.url}_${index}`;

                return (
                  <div className="col-md-4" key={uniqueKey}>
                    <NewsItem
                      title={element.title?element.title:""}
                      description={element.description?element.description:""}
                      imgurl={element.urlToImage ? element.urlToImage : ""}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                      index = {element.source.index}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
       {/* <div className="d-flex justify-content-around">
          <button
            disabled={page <= 1}
            type="button"
            onClick={prevClick}
            className="btn btn-primary"
          >
            &laquo; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pagesize)
            }
            type="button"
            onClick={nextClick}
            className="btn btn-primary"
          >
            Next &raquo;
          </button>
        </div> */}
      </div>
   
      </>
      
    );
}

News.defaultProps = {
  pagesize: 8,
  country: "in",
  category: "general",
};

News.propTypes = {
  pagesize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
