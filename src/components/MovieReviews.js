import React from 'react'

const MovieReviews = ( { reviews } ) => {
	console.log(reviews)
	return (
		<div className="review-list">
			{reviews.map((review, key) => <div key={key} className="review">{review.display_title}</div>)}
		</div>
		)
}

MovieReviews.defaultProps = {
	reviews: []
}

export default MovieReviews