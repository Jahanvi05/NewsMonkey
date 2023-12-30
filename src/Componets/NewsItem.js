import newimg from './news.webp';
import React from 'react'

const NewsItem = (props) => {

  const toggleMode = () => {
  

    if (mode === 'grey') {
    setMode('dark');
    document.body.style.backgroundColor = 'rgba(11,21,28,255)';
   // showAlert('Dark mode has been enabled', 'success');
   
  } else {
    setMode('grey');
    document.body.style.backgroundColor = 'white';
    //showAlert('grey mode has been enabled', 'success');
  }
};


  let { title,description,imgurl,newsurl,author,date,source } = props;


   
    return (
      <>
      
        <div className=" my-3" >
          <div style={{backgroundColor:'#E3EAED'}} className="card">
            <div style={{display:"flex",justifyContent:"flex-end",right:"0",position:"absolute"}}>
        <span className=" badge rounded-pill bg-danger" >
    {source}</span>
    </div>
          <img src={!imgurl?newimg:imgurl} className="card-img-top" alt="..." />
          <div  className="card-body"> 
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}
            </p>
            <p  className="card-text"><small >By { !author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">
             Read More
            </a>
          </div>
          </div>
        </div>
      </>
  )
}

export default NewsItem
