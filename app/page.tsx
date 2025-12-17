"use client";

import React from "react";
import "./globals.css"; // make sure your CSS is imported here or in layout.tsx

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="container"> 
          <div className="logo">Omsmlx</div>
          <nav className="navigation">
            <a href="#about" className="nav-link">About</a>
            <a href="#team" className="nav-link">Team</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>WE ARE THE FULL STACK DEV</h1>
          <p>We Can Transform your ideas into reality.</p>
          <a href="#about" className="button">Learn More</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2>About Us</h2>
          <p className="large">We focus on what matters.</p>

          <div className="feature-grid">
            <div className="feature">
              <i className="fa fa-desktop"></i>
              <h3>Responsive</h3>
              <p>Our designs work on any device.</p>
            </div>

            <div className="feature">
              <i className="fa fa-heart"></i>
              <h3>Passion</h3>
              <p>Driven by a love for what we do.</p>
            </div>

            <div className="feature">
              <i className="fa fa-diamond"></i>
              <h3>Design</h3>
              <p>Simple yet elegant designs.</p>
            </div>

            <div className="feature">
              <i className="fa fa-cog"></i>
              <h3>Support</h3>
              <p>We're here to help you succeed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team" id="team">
        <div className="container">
          <h2>Meet Our Team</h2>

          <div className="team-grid">
            <div className="team-member">
              <img src="/person.jpg" alt="Omm Prakash Samal" className="member-img" />
              <h3>Omm Prakash Samal</h3>
              <p className="role">CEO & Founder</p>
              <p className="description">
                A visionary leader driving our company forward with innovative strategies.
              </p>
            </div>

            <div className="team-member">
              <img src="/person.jpg" alt="Preet Priyanshu Mangraj" className="member-img" />
              <h3>Preet Priyanshu Mangraj</h3>
              <p className="role">Lead Designer</p>
              <p className="description">
                Creating beautiful and functional designs that elevate user experience.
              </p>
            </div>

            <div className="team-member">
              <img src="/person.jpg" alt="Omm Prasad Jena" className="member-img" />
              <h3>Omm Prasad Jena</h3>
              <p className="role">Marketing Specialist</p>
              <p className="description">
                Strategizing campaigns and engaging content for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <div className="container">
          <h2>Pricing Plans</h2>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Basic</h3>
              <p className="price">$10/year</p>
              <p>Great for Single page maintainance</p>
              <a className="button">Choose Plan</a>
            </div>

            <div className="pricing-card featured">
              <h3>Pro</h3>
              <p className="price">$20/year</p>
              <p>Perfect for multiple page maintainance</p>
              <a className="button">Choose Plan</a>
            </div>

            <div className="pricing-card">
              <h3>Premium</h3>
              <p className="price">$30/year</p>
              <p>For Business webpage maintainance</p>
              <a className="button">Choose Plan</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2>Contact Us</h2>

          <div className="contact-wrapper">
            <div className="contact-info">
              <p><strong>Email:</strong> ommsamalommsamal@gmail.com</p>
              <p><strong>Phone:</strong> 9668768400</p>
              <p><strong>Address:</strong> Bhubaneswar, Odisha</p>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button className="button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 Omsmlx. All rights reserved.</p>
      </footer>
    </>
  );
}
