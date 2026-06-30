import { useState } from 'react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-cyan-400 font-medium mb-3">
          👋 Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Dark Glitch
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          Full Stack Developer & Cybersecurity Enthusiast
        </h2>

        <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto mb-10">
          I build modern web applications, IoT systems, and security-focused
          software using React, FastAPI, Python, Java, and Linux. I enjoy
          creating clean, fast, and user-friendly experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition font-semibold"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}