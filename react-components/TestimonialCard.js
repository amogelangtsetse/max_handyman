import React from 'react';

class TestimonialCard extends React.Component {
    render() {
        return (
            <div className="testimonial-card">
                <p>"{this.props.message}"</p>
                <strong>- {this.props.name}</strong>
            </div>
        );
    }
}

export default TestimonialCard;
