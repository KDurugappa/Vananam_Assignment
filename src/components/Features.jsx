// src/components/Features.js
import React from 'react';
import './Features.css';

const features = [
    { title: 'Retail Innovation', description: 'Embark on a journey of reimagined retail experiences. Our initiatives in transit retail set new benchmarks, creating memorable moments for travelers.' },
    { title: 'Real Estate Ventures', description: 'Discover the foundation of tomorrow. Our real estate initiatives transform spaces, contributing to the development of vibrant and sustainable communities.' },
    { title: 'Global Rewards & Loyalty', description: 'Join our global network. Our initiatives in rewards and loyalty connect businesses and customers worldwide, fostering lasting relationships.' },
    { title: 'Agri Trade and Wholesale', description: 'Explore the heart of international trade. Our initiatives in agri trade and wholesale uphold the highest standards, ensuring quality and reliability.' },
];

const Features = () => {
    return (
        <section className="features">
            <h2>Our Initiatives</h2>
            <div className="feature-list">
                {features.map((feature, index) => (
                    <div className="feature-item" key={index}>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
