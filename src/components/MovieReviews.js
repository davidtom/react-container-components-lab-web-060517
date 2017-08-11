// Code MovieReviews Here
import React from "react"

const Review = ({headline, summaryShort}) => {
  return (
    <div className="review">
      <h3>{headline}</h3>
      <p>{summaryShort}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {

    return (
      <div className="review-list">
        {reviews.map((review, index) => <Review headline={review.headline} summaryShort={review.summary_short} key={index}/>)}
      </div>
    )
}

MovieReviews.defaultProps = {
  reviews: {}
}

export default MovieReviews
