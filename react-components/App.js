const App = () => {
    const testimonials = [
        { message: "I'm super impressed with Max's work and attention to detail", name: "Thabang Sithole" },
        { message: "Highly recommended! He fixed my lights quickly.", name: "Reamogetse Tsetse" },
        { message: "Reliable and professional service every time.", name: "Naledi Etsane" },
    ];

    return React.createElement(
        'div',
        { id: 'testimonials-container' },
        React.createElement('h2', null, 'Testimonials'),
        testimonials.map((testimonial, index) =>
            React.createElement(TestimonialCard, {
                key: index,
                message: testimonial.message,
                name: testimonial.name,
            })
        )
    );
};


const TestimonialCard = (props) => {
    return React.createElement(
        'div',
        { className: 'testimonial-card' },
        React.createElement('p', null, `"${props.message}"`),
        React.createElement('strong', null, `- ${props.name}`)
    );
};


const root = ReactDOM.createRoot(document.getElementById('testimonials'));
root.render(React.createElement(App));
