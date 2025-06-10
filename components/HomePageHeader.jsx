import React from 'react';

export default function HomePageHeader() {
    const handleClickEvent = (e) => {
        e.preventDefault();
        window.open('https://www.linkedin.com/in/daniel-kosukhin-82052634b/', '_blank', 'noopener,noreferrer');
    }

  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-10 max-w-2xl w-full text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
                Hello, I'm <span className="text-tertiary">Daniel Kosukhin</span>
            </h1>
            <h2 className="text-xl text-gray-200 mb-4">Full-stack developer</h2>
            <p className="text-gray-300 mb-6">
                I specialize in creating technology that solves problems with optimality and practicality.
            </p>
            <div className="flex justify-center gap-4">
                <a href="/projects" className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-md font-medium transition">
                    View My Work →
                </a>
                <a onClick={handleClickEvent} className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-md font-medium transition">
                    Get In Touch ✉️
                </a>
            </div>
        </div>
    </div>
  )
}