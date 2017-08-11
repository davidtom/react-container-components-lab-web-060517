import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from "./MovieReviews"

const NYT_API_KEY = '33ac7362f9e4446bb9916ddcdbaba3b3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      reviews: []
    }
  }

  fetchMovies(){
    fetch(URL)
    .then(resp => resp.json())
    .then(json => this.setState({reviews: json.results}))
  }

  componentDidMount(){
    this.fetchMovies()
  }

  render(){
    return(
      <div className = "latest-movie-reviews">
        <h3>LATEST MOVIE REVIEWS</h3>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
  )
  }
}

export default LatestMovieReviewsContainer
