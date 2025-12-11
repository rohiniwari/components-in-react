import React, { useState } from 'react';

function FirstComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className="app-container">
      <header className="hero">
        <div className="hero-inner">
          <h1 className="title">Welcome to My React App</h1>
          <p className="subtitle">A tiny demo showcasing components and styling</p>
          <div className="controls">
            <button className="btn" onClick={() => setCount(c => c + 1)}>Click me</button>
            <span className="counter">Clicked <strong>{count}</strong> times</span>
          </div>
        </div>
      </header>

      <main className="cards">
        <article className="card">
          <h3>Card Title</h3>
          <p>Explain something interesting here. Keep it concise and helpful.</p>
          <a className="link" href="#">Learn more →</a>
        </article>

        <article className="card">
          <h3>Another Card</h3>
          <p>Short description of another feature or component.</p>
          <a className="link" href="#">Explore →</a>
        </article>
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} My React App</footer>
    </div>
  );
}

export default FirstComponent;