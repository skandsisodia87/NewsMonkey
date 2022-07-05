import React,{useState,useEffect} from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=>  {

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
 

 
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async ()=> {
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  }

  
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page+1);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
    };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}- NewsMonkey`;
    updateNews();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <>
        <h2 className=' text-center' style={{margin:'35px 0px',marginTop:'90px'}}>NewsMonkey- Top {capitalizeFirstLetter(props.category)} Headlines </h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >

          <div className="container">
            <div className="row">
              {articles.map((element) => {     //react looping
                return <div className="col-md-4" key={element.url}>
                  <NewsItems title={element.title?element.title:''} discription={element.description?element.description:''} images={element.urlToImage} url={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
                </div>

              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
}


News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News;
