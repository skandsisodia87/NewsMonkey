import React from 'react'


 const NewsItems= (props)=> {
        let { title, discription, images, url, author, date,source } = props     //destructuring ke help sa props neekal rha hai
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{display:'flex', justifyContent:'flex-end',position:'absolute',right:'0'}}>

                    <span className="badge rounded-pill bg-danger" >
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    </div>
                    <img src={images ? images : "https://images.moneycontrol.com/static-mcnews/2022/02/sensex_nifty_stock-stocks_stock-770x433.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{discription}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
                        <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItems
