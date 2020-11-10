import React from 'react';

class Review extends React.Component{

    render(){
        const { review } = this.props;
        return(
            <div>
                <div>
                    <div>Stars: {review.stars}</div>
                    <div>Comment: {review.comment}</div>
                    <br/>
                </div>
            </div>
        );
    }
}
export default Review;