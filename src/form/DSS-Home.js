import React from 'react';
import { motion } from 'framer-motion';
import './DSS-home.scss'

const DSSGamingHome = () => {
    return (
        <div className="homepage"> {/* Hero Section */}
            <header className="hero"> <div className="overlay">
                <h1 className="title">GameDev Decision Support System</h1>
                <p className="subtitle"> Empowering studios to make smarter, faster, and winning decisions in game development.
                </p>
                <button className="cta-button">Get Started</button>
            </div>
            </header> {/* Features Section */}
            <section className="features">
                <h2>Why Choose Us?</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <h3>🎮 Industry Insights</h3>
                        <p> Access real-time analytics and trends to guide your development strategy.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3>⚡ Smart Decisions</h3>
                        <p> AI-powered recommendations to reduce risks and maximize success.
                        </p> </div> <div className="feature-card">
                    <h3>🚀 Faster Development</h3>
                    <p> Streamline workflows with tools designed to accelerate decision-making.
                    </p>
                </div>
                </div>
            </section> {/* Call to Action */}
            <section className="cta">
                <h2>Level Up Your Game Development</h2>
                <p> Join leading companies already using our Decision Support System to revolutionize their gaming projects.
                </p>
                <button className="cta-button">Request a Demo</button>
            </section> {/* Footer */}
            <footer className="footer">
                <p>© 2025 GameDev DSS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default DSSGamingHome;
