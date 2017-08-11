import React, { Component } from 'react';
import MovieReviews from "./MovieReviews"
// Code SearchableMovieReviewsContainer Here

const NYT_API_KEY = '33ac7362f9e4446bb9916ddcdbaba3b3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

const SearchBar = ({searchTerm, handleChange}) => {
  return (
    <div>
      <label>Search:</label>
      <input type="text" value={searchTerm} onChange={handleChange}/>
    </div>
  )
}

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      reviews: [],
      searchTerm: "Spain"
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

  handleChange = event => {
    let text = event.target.value
    this.setState({
      searchTerm: text
    })
  }

  filteredReviews = () => {
    return this.state.reviews.filter(review => review.headline.toLowerCase().indexOf(this.state.searchTerm) !== -1)
  }


  render(){
    return(
      <div className = "searchable-movie-reviews">
        <h3>SEARCHABLE MOVIE REVIEWS</h3>
        <SearchBar searchTerm={this.state.searchTerm} handleChange={this.handleChange}/>
        <MovieReviews reviews={this.filteredReviews()}/>
      </div>
  )
  }
}

export default SearchableMovieReviewsContainer
