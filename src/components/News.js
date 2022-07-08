import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps ={
    country :'in',
    pageSize: 8,
    category: "general"
  }
  static propTypes={
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number,
    category: PropTypes.string.isRequired,
  }
    // articles = [
    //     {
    //   "source": {
    //     "id": "cnn",
    //     "name": "CNN"
    //     },
    //     "author": "Helen Regan and Adrienne Broaddus, CNN",
    //     "title": "July Fourth celebrations in Highland Park, Illinois, end in terror after mass shooting leaves 6 dead and dozens injured - CNN",
    //     "description": "A day of national celebration turned to tragedy Monday when a gunman killed six people and injured dozens of others at a July Fourth parade in Highland Park, Illinois -- leaving the nation grieving yet another mass shooting.",
    //     "url": "https://www.cnn.com/2022/07/05/us/highland-park-illinois-shooting-july-fourth-parade-tuesday-intl-hnk/index.html",
    //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220705010951-highland-park-illinois-shooting-july-4-parade-tuesday-super-tease.jpg",
    //     "publishedAt": "2022-07-05T07:19:00Z",
    //     "content": "Highland Park, Illinois (CNN)A day of national celebration turned to tragedy Monday when a gunman killed six people and injured dozens of others at a July Fourth parade in Highland Park, Illinois -- … [+6865 chars]"
    //     },
    //     {
    //   "source": {
    //     "id": "reuters",
    //     "name": "Reuters"
    //     },
    //     "author": null,
    //     "title": "Norwegian oil and gas workers start strike, cutting output - Reuters.com",
    //     "description": "Norwegian offshore workers began a strike on Tuesday that will reduce oil and gas output, the union leading the industrial action told Reuters.",
    //     "url": "https://www.reuters.com/business/energy/norwegian-oil-gas-workers-start-strike-cutting-output-2022-07-04/",
    //     "urlToImage": "https://www.reuters.com/resizer/IjOLNEjSDg3FtY-Zm6eRCQGyrL0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EXDVO2VUWJJUTBGDMGFT5XDQ6E.jpg",
    //     "publishedAt": "2022-07-05T06:38:00Z",
    //     "content": "OSLO, July 5 (Reuters) - Norwegian offshore workers began a strike on Tuesday that will reduce oil and gas output, the union leading the industrial action told Reuters.\r\nThe strike, in which workers … [+2757 chars]"
    //     },
    //     {
    //   "source": {
    //     "id": null,
    //     "name": "CNBC"
    //     },
    //     "author": "Evelyn Cheng",
    //     "title": "More parts of China battle Covid and threats of lockdown as cases spike again - CNBC",
    //     "description": "Just days after China relaxed some Covid controls, virus cases in different parts of the country have put new regions on alert.",
    //     "url": "https://www.cnbc.com/2022/07/05/more-parts-of-china-battle-covid-and-threats-of-lockdown-as-cases-spike.html",
    //     "urlToImage": "https://image.cnbcfm.com/api/v1/image/107084315-1656999692628-gettyimages-1241694866-SHANGHAI_COVID.jpeg?v=1656999901&w=1920&h=1080",
    //     "publishedAt": "2022-07-05T06:27:53Z",
    //     "content": "BEIJING Just days after China relaxed some Covid controls, virus cases in different parts of the country have put new regions on alert.\r\nThe number of cities restricting local movement more than doub… [+2378 chars]"
    //     },
    //     {
    //   "source": {
    //     "id": "cnn",
    //     "name": "CNN"
    //     },
    //     "author": "Mark Morales, Liam Reilly, Amanda Jackson and Jessie Yeung, CNN",
    //     "title": "2 law enforcement officers shot during a July Fourth festival in Philadelphia, source says - CNN",
    //     "description": "Two police officers were shot during a July Fourth celebration in Philadelphia, according to city police.",
    //     "url": "https://www.cnn.com/2022/07/04/us/philadelphia-july-fourth-festival-shooting/index.html",
    //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220704193159-01-phiiladelphia-security-incident-0704-super-tease.jpg",
    //     "publishedAt": "2022-07-05T06:03:00Z",
    //     "content": null
    //     },
    //     {
    //   "source": {
    //     "id": "associated-press",
    //     "name": "Associated Press"
    //     },
    //     "author": "Rod Mcguirk",
    //     "title": "Sydney floods burden 50000 around Australia's largest city - The Associated Press",
    //     "description": "RICHMOND, Australia (AP) — Hundreds of homes have been inundated in and around Australia’s largest city in a flood emergency that was causing trouble for 50,000 people, officials said Tuesday. Emergency response teams made 100 rescues overnight of people trap…",
    //     "url": "https://apnews.com/article/floods-sydney-australia-weather-new-south-wales-ace334a03c8441856ea068eb12317d20",
    //     "urlToImage": "https://storage.googleapis.com/afs-prod/media/10136a46188b49dc9910d8a4833edee6/3000.jpeg",
    //     "publishedAt": "2022-07-05T05:18:14Z",
    //     "content": "RICHMOND, Australia (AP) Hundreds of homes have been inundated in and around Australias largest city in a flood emergency that was causing trouble for 50,000 people, officials said Tuesday.\r\nEmergenc… [+3786 chars]"
    //     },
    //     {
    //   "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": "Gerson Freitas Jr, Stephen Stapczynski and Anna Shiryaevskaya",
    //     "title": "Natural Gas Soars 700%, Becoming Driving Force in the New Cold War - Yahoo Finance",
    //     "description": "(Bloomberg) -- One morning in early June, a fire broke out at an obscure facility in Texas that takes natural gas from US shale basins, chills it into a...",
    //     "url": "https://finance.yahoo.com/news/natural-gas-soars-700-becoming-040106114.html",
    //     "urlToImage": "https://s.yimg.com/ny/api/res/1.2/jdTFnfV5ITvyu6sjdZc0Ow--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDY-/https://s.yimg.com/uu/api/res/1.2/JI2DbaJNJF24pfB_KVNsog--~B/aD04NzA7dz0xMjk2O2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/bloomberg_markets_842/e62415d274dadd88767888c2264ff46e",
    //     "publishedAt": "2022-07-05T05:09:07Z",
    //     "content": "(Bloomberg) -- One morning in early June, a fire broke out at an obscure facility in Texas that takes natural gas from US shale basins, chills it into a liquid and ships it overseas. It was extinguis… [+9722 chars]"
    //     },
    //     {
    //   "source": {
    //     "id": "the-wall-street-journal",
    //     "name": "The Wall Street Journal"
    //     },
    //     "author": "Isabel Coles and Mauro Orru",
    //     "title": "Ukraine’s Allies Talk of Rebuilding as Russia Consolidates Gains in Donbas - The Wall Street Journal",
    //     "description": "Officials from Ukraine and allied countries met Monday in Switzerland to discuss how to rebuild Ukraine as Russian forces seized more territory in the east.",
    //     "url": "https://www.wsj.com/articles/ukraines-allies-talk-rebuilding-as-zelensky-vows-to-retake-east-11656937581",
    //     "urlToImage": "https://images.wsj.net/im-576880/social",
    //     "publishedAt": "2022-07-05T04:01:00Z",
    //     "content": null
    //     },
    //     {
    //   "source": {
    //     "id": null,
    //     "name": "YouTube"
    //     },
    //     "author": null,
    //     "title": "Liv Morgan's magical Money in the Bank: Raw, July 4, 2022 - WWE",
    //     "description": "Take a look at the magical evening Liv Morgan had at WWE Money in the Bank. Catch WWE action on Peacock, WWE Network, FOX, USA Network, Sony India and more.S...",
    //     "url": "https://www.youtube.com/watch?v=YLwCMs2GR7o",
    //     "urlToImage": "https://i.ytimg.com/vi/YLwCMs2GR7o/maxresdefault.jpg",
    //     "publishedAt": "2022-07-05T03:45:25Z",
    //     "content": null
    //     },
    //     {
    //   "source": {
    //     "id": null,
    //     "name": "CBS Sports"
    //     },
    //     "author": "",
    //     "title": "Twins, Byron Buxton turn first 8-5 triple play in MLB history vs. White Sox - CBS Sports",
    //     "description": "The White Sox ran into the triple play more than the Twins turned it, most people would say",
    //     "url": "https://www.cbssports.com/mlb/news/twins-byron-buxton-turn-first-8-5-triple-play-in-mlb-history-vs-white-sox/",
    //     "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/07/05/5efe65a8-43ef-4e1f-a184-a4127811f35b/thumbnail/1200x675/62b472f8ea5f2a0e3cf4b11d9c459ea6/gettyimages-14068210401.jpg",
    //     "publishedAt": "2022-07-05T03:17:00Z",
    //     "content": "Every time you go to the ballpark you might see something you've never seen before. And such was the case Monday at Guaranteed Rate Field, where fans saw the first 8-5 triple play in MLB history. The… [+1499 chars]"
    //     },
    //     {
    //   "source": {
    //     "id": "the-washington-post",
    //     "name": "The Washington Post"
    //     },
    //     "author": "Meryl Kornfield, Scott Higham, Sari Horwitz",
    //     "title": "Federal judge rules against hard-hit West Virginia community in opioid trial - The Washington Post",
    //     "description": "Judge David A. Faber dismissed the argument made by Cabell County and its seat, Huntington, that three drug distributors bore responsibility for the consequences of an inundation of opioids.",
    //     "url": "https://www.washingtonpost.com/health/2022/07/04/federal-judge-rules-against-hard-hit-west-virginia-community-opioid-trial/",
    //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DKD5DWHJCQI6XIV2HPRR2NESLA.jpg&w=1440",
    //     "publishedAt": "2022-07-05T02:46:00Z",
    //     "content": "Placeholder while article actions load\r\nIn a blow to claims that drug companies fueled the opioid crisis, a federal judge ruled Monday that the nations three major drug distributors did not cause a p… [+8970 chars]"
    //     },
       
    //     {
    //   "source": {
    //     "id": null,
    //     "name": "ESPN"
    //     },
    //     "author": null,
    //     "title": "United States vs. Haiti - Football Match Report - July 4, 2022 - ESPN",
    //     "description": "Get a report of the United States vs. Haiti 2022 CONCACAF W Championship, Group Stage football match.",
    //     "url": "https://www.espn.com/soccer/report/_/gameId/634607",
    //     "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0705%2Fr1032589_1296x729_16%2D9.jpg",
    //     "publishedAt": "2022-07-05T02:32:24Z",
    //     "content": "Alex Morgan scored a first-half brace and Margaret Purce added a late goal as the United States women's national team beat Haiti 3-0 in group stage action at the CONCACAF W Championship.\r\n- Rapinoe t… [+1932 chars]"
    //     },

    //     {
    //   "source": {
    //     "id": null,
    //     "name": "Deadline"
    //     },
    //     "author": "Tom Tapp",
    //     "title": "‘Stranger Things 4’ Writers Reveal Three Season Finale Moments That Were Improvised By The Actors - Deadline",
    //     "description": "WARNING, spoilers ahead: After Stranger Things 4 had its monster sized, two-episode finale on Friday, the series’ writers took to Twitter to reveal three moments from that finale that weren’t in the script. At one point, Winona Ryder’s Joyce sees off David Ha…",
    //     "url": "https://deadline.com/2022/07/stranger-things-4-writers-season-finale-moments-actors-improvised-1235057857/",
    //     "urlToImage": "https://deadline.com/wp-content/uploads/2022/07/Screen-Shot-2022-07-04-at-5.37.52-PM.png?w=846",
    //     "publishedAt": "2022-07-05T01:26:00Z",
    //     "content": "WARNING, spoilers ahead: After Stranger Things 4 had its monster sized, two-episode finale on Friday, the series’ writers took to Twitter to reveal three moments from that finale that weren’t in the … [+1744 chars]"
    //     },
    //     {
    //   "source": {
    //     "id": "business-insider",
    //     "name": "Business Insider"
    //     },
    //     "author": "John L. Dorman",
    //     "title": "Brittney Griner writes to Biden asking for help to leave Russian jail - Business Insider",
    //     "description": "\"I miss my wife! I miss my family! I miss my teammates!\" Griner wrote. \"I am grateful for whatever you can do at this moment to get me home.\"",
    //     "url": "https://www.businessinsider.com/brittney-griner-russia-biden-letter-terrified-wnba-detained-trial-2022-7",
    //     "urlToImage": "https://i.insider.com/628fc859f099c4001956836c?width=1200&format=jpeg",
    //     "publishedAt": "2022-07-05T01:21:17Z",
    //     "content": "WNBA star Brittney Griner who has been held in Russia since February on Monday made a direct appeal to President Joe Biden for his help to release her and other Americans detained while abroad in a h… [+2813 chars]"
    //     },
    //     {
    //   "source": {
    //     "id": null,
    //     "name": "CoinDesk"
    //     },
    //     "author": "James Rubin",
    //     "title": "First Mover Asia: Bitcoin Rebounds Past $20K; China's Blockchain Revolution Is Missing On-Chain Data - CoinDesk",
    //     "description": "Ether and most other major altcoins regain ground they'd lost in last week's downturn; China companies seem unconvinced by blockchain technology.",
    //     "url": "https://www.coindesk.com/markets/2022/07/05/first-mover-asia-bitcoin-rebounds-past-20k-chinas-blockchain-revolution-is-missing-on-chain-data/",
    //     "urlToImage": "https://www.coindesk.com/resizer/0t2khVLbfYXcGY_eKGj_uc64-TY=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/2ZYE7TBVUJGAVIFDRNDSTHVBZM.png",
    //     "publishedAt": "2022-07-05T00:20:00Z",
    //     "content": "Good morning. Heres whats happening:\r\nPrices: Bitcoin gains ground hovering just above $20K.\r\nInsights: China's blockchain revolution may not be so revolutionary.\r\nCatch the latest episodes ofCoinDes… [+9913 chars]"
    //     },
    //     {
    //   "source": {
    //     "id": null,
    //     "name": "XDA Developers"
    //     },
    //     "author": "Ben Sin",
    //     "title": "Xiaomi 12S Ultra Hands-On: Putting that 1-inch Leica camera to the test - XDA Developers",
    //     "description": "The Xiaomi 12S Ultra brings a brand new 1-inch camera sensor with Leica optics, plus a large beautiful display. We go hands-on with it!",
    //     "url": "https://www.xda-developers.com/xiaomi-12s-ultra-hands-on/",
    //     "urlToImage": "https://www.xda-developers.com/files/2022/07/xiaomi-12s-ultra-xda-14566645897698768768767867.jpg",
    //     "publishedAt": "2022-07-05T00:00:00Z",
    //     "content": "The Xiaomi 12 Pro that came out four months ago was a very good 2022 Android flagship that got a good reception on just about every tech site, including this one. But yet, if you read my review close… [+10724 chars]"
    //     },
    //     {
    //   "source": {
    //     "id": null,
    //     "name": "Akron Beacon Journal"
    //     },
    //     "author": "Tawney Beans and Abbey Marshall, Akron Beacon Journal",
    //     "title": "Akron protesters gather at justice center, eventually disperse around 9 p.m. curfew - Akron Beacon Journal",
    //     "description": "At least 100 armed and unarmed protesters were outside Akron Mayor Dan Horrigan's home Monday afternoon.",
    //     "url": "https://www.beaconjournal.com/story/news/2022/07/04/over-100-protesters-visit-mayor-dan-horrigans-home-monday-afternoon/7805256001/",
    //     "urlToImage": "https://www.gannett-cdn.com/presto/2022/07/04/NABJ/8c90408b-b5d7-4547-abe0-0c0ed7619067-jayland_walker_7-4_13.jpg?auto=webp&crop=3894,2191,x0,y668&format=pjpg&width=1200",
    //     "publishedAt": "2022-07-04T22:07:30Z",
    //     "content": "Monday’s question of the day seemed to be, “Where is everybody?”\r\nThat was the common phrase among the few protesters found in front of the Harold K. Stubbs Justice Center in downtown Akron.\r\nThe rec… [+3922 chars]"
    //     },
    //     {
    //   "source": {
    //     "id": null,
    //     "name": "San Francisco Chronicle"
    //     },
    //     "author": "Jason Fagone",
    //     "title": "Why UCSF's Bob Wachter says COVID variant BA.5 is 'a different beast' - San Francisco Chronicle",
    //     "description": "The new BA.5 strain of the COVID-causing virus is more infectious and better able to...",
    //     "url": "https://www.sfchronicle.com/health/article/Why-UCSF-s-Bob-Wachter-says-COVID-variant-BA-5-17283783.php",
    //     "urlToImage": "https://s.hdnux.com/photos/01/23/41/70/21896745/6/rawImage.jpg",
    //     "publishedAt": "2022-07-04T19:24:43Z",
    //     "content": "The new BA.5 strain of the COVID-causing virus is a different beast from ones weve already seen more infectious and better able to evade immune responses and we need to change our thinking about how … [+2428 chars]"
    //     },
    //     {
    //   "source": {
    //     "id": "engadget",
    //     "name": "Engadget"
    //     },
    //     "author": "https://www.engadget.com/about/editors/kris-holt",
    //     "title": "NASA's CAPSTONE satellite breaks from Earth's orbit and heads toward the Moon - Engadget",
    //     "description": "The cubesat is critical to the first Artemis mission..",
    //     "url": "https://www.engadget.com/nasa-capstone-satellite-earth-orbit-moon-space-190042855.html",
    //     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-07/1c3cfe00-fbbe-11ec-af3f-53af909eec99",
    //     "publishedAt": "2022-07-04T19:01:20Z",
    //     "content": "NASA's\r\n grand plan to take humans back to the Moon for the first time in over half a century has taken another step forward. The 55-pound CAPSTONE\r\n (Cislunar Autonomous Positioning System Technolog… [+1112 chars]"
    //     }
    //     ]
    constructor(){
        super();
        this.state={
            articles:[], //this.articles,
            loading: false,
            page:1,
      
        }
    }
    async updateNews(){
      const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=32685c36ee2e404ab6d2279e898a6e6c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({articles: parseData.articles,totalResults:parseData.totalResults,loading:false});

    }
     async componentDidMount(){
        // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=32685c36ee2e404ab6d2279e898a6e6c&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parseData = await data.json();
        // this.setState({articles: parseData.articles,totalResults:parseData.totalResults,loading:false});
        this.updateNews();
      }
      handleprevious =async()=>{
        // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=32685c36ee2e404ab6d2279e898a6e6c&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parseData = await data.json();
        // this.setState({
        //   articles: parseData.articles,
        //   page: this.state.page-1,
        //   loading: false
        // });
        
        this.setState({page: this.state.page- 1});
        this.updateNews();
      }
      handlenext = async()=>{
      //   console.log("Next");
      //   if(this.state.page +1 > Math.ceil( this.state.totalResults/this.props.pageSize)){

      //   }
      //   else{
         
      //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=32685c36ee2e404ab6d2279e898a6e6c&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
      //   this.setState({loading:true})
      //   let data = await fetch(url);
      //   let parseData = await data.json();
       
      //   this.setState({
      //   page: this.state.page+1,
      //   articles: parseData.articles,
      //   loading: false
      //   });
      // }
      this.setState({page: this.state.page+ 1});
      this.updateNews();
      }
  render() {
    return (
      <div className='container my-3' >
                <h1 className="text-center" style={{margin: '35px 0px'}}>Pak News - Top Headlines</h1>
                {this.state.loading &&<Spinner/>}
                <div  className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                 return   <div className="col-md-4" key= {element.url} >
                   <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} ImgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
               </div>

                })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handleprevious}>&larr; Previous</button>
                <button disabled={this.state.page +1 > Math.ceil( this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark"onClick={this.handlenext}>Next &rarr;</button>
                </div>
                
      </div>
    )
  }
}

export default News
