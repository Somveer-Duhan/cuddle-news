import React from 'react';

const NewsItem=()=>{
    const { title, description, imageUrl ,newUrl,author} = this.props;
     return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {author}</small></p>
            <a href={newUrl} target='_blank' rel="noopener noreferrer" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    );
}



export default NewsItem;
