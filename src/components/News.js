import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);

    setarticles(parseData.articles);
    settotalResults(parseData.totalResults);
    setloading(false);

    props.setProgress(100);
  };
  useEffect(() => {
      document.title = `${capitalizeFirstLetter(props.category)}-PAKNEWS`;
    updateNews();
  });

  // const handleprevious = async () => {
  //   // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=32685c36ee2e404ab6d2279e898a6e6c&page=${page -1}&pageSize=${props.pageSize}`;
  //   // setState({loading:true})
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // setState({
  //   //   articles: parseData.articles,
  //   //   page: page-1,
  //   //   loading: false
  //   // });

  //   setpage(page - 1);
  //   updateNews();
  // };
  // const handlenext = async () => {
  //   //   console.log("Next");
  //   //   if(page +1 > Math.ceil( totalResults/props.pageSize)){

  //   //   }
  //   //   else{

  //   //   let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=32685c36ee2e404ab6d2279e898a6e6c&page=${page +1}&pageSize=${props.pageSize}`;
  //   //   setState({loading:true})
  //   //   let data = await fetch(url);
  //   //   let parseData = await data.json();

  //   //   setState({
  //   //   page: page+1,
  //   //   articles: parseData.articles,
  //   //   loading: false
  //   //   });
  //   // }

  //   setpage(page + 1);
  //   updateNews();
  // };
  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setarticles(articles.concat(parseData.articles));
    settotalResults(parseData.totalResults);
    setloading(false);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px", marginTop:'90px' }}>
        Pak News - Top Headlines - {capitalizeFirstLetter(props.category)}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {!loading &&
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      ImgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handleprevious}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={handlenext}
          >
            Next &rarr;
          </button>
        </div> */}
    </>
  );
}
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
}
News.propTypes = {
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  category: PropTypes.string.isRequired,
}

export default News;
