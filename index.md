---
layout: default
title: Home
---

<section id="home" class="hero" role="region" aria-labelledby="hero-title">
  <div class="container hero-inner">
    <div class="hero-content">
      <h1 id="hero-title">Hi, I’m {{ site.author | default: "Firstname Lastname" }} — I build beautiful digital products.</h1>
      <p class="lead">I’m a product designer & front-end developer focused on creating delightful, accessible user experiences and polished interfaces.</p>
      <p class="hero-cta">
        <a class="btn" href="#projects">View Projects</a>
        <a class="btn btn-outline" href="#contact">Get in touch</a>
      </p>
    </div>
    <div class="hero-image" aria-hidden="true">
      <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="" />
    </div>
  </div>
</section>

<section id="about" class="about container" aria-labelledby="about-heading">
  <div class="about-inner">
    <div class="about-text">
      <h2 id="about-heading">About me</h2>
      <p>I’m a designer and developer who loves turning ideas into products. I work across the full stack, with a passion for front-end development, interaction design, and performance. I enjoy collaborating with product teams to ship high-quality, accessible experiences.</p>
      <ul class="about-list">
        <li><strong>Location:</strong> City, Country</li>
        <li><strong>Available for:</strong> Freelance, Full-time</li>
        <li><strong>Skills:</strong> HTML, CSS, JavaScript, React, Figma, Accessibility</li>
      </ul>
      <p><a class="btn" href="#projects">See my work</a></p>
    </div>
    <div class="about-photo">
      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="{{ site.author }} portrait" />
    </div>
  </div>
</section>

<section id="projects" class="projects container" aria-labelledby="projects-heading">
  <h2 id="projects-heading">Selected Projects</h2>
  <p class="section-intro">A selection of projects I've shipped — product and front-end work, prototypes, and experiments.</p>

  <div class="projects-grid" id="projects-grid">
    {% for project in site.data.projects %}
    <article class="card project-card" tabindex="0" data-title="{{ project.title | escape }}" data-image="{{ project.image }}" data-description="{{ project.description | escape }}" data-links='{{ project.links | jsonify }}'>
      <div class="card-media">
        <img src="{{ project.image }}" alt="{{ project.title }} screenshot">
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ project.title }}</h3>
        <p class="card-excerpt">{{ project.description }}</p>
        <p class="card-meta">{{ project.meta }}</p>
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section id="contact" class="contact container" aria-labelledby="contact-heading">
  <h2 id="contact-heading">Contact</h2>
  <p class="section-intro">Interested in working together or have a question? Send a note — I usually respond within a few days.</p>

  <div class="contact-grid">
    <form id="contact-form" class="contact-form" novalidate>
      <label>
        <span class="label-text">Name</span>
        <input type="text" name="name" id="name" required placeholder="Your name">
      </label>
      <label>
        <span class="label-text">Email</span>
        <input type="email" name="email" id="email" required placeholder="name@example.com">
      </label>
      <label>
        <span class="label-text">Message</span>
        <textarea name="message" id="message" rows="6" required placeholder="Tell me about your project..."></textarea>
      </label>
      <div class="form-actions">
        <button type="submit" class="btn">Send message</button>
        <button type="reset" class="btn btn-outline">Reset</button>
      </div>
      <p class="form-note">This form uses your mail client if no server is configured. To use a hosted form handler, replace the submission handling in script.js.</p>
    </form>

    <aside class="contact-info" aria-labelledby="contact-info-heading">
      <h3 id="contact-info-heading">Other ways to reach me</h3>
      <p><strong>Email:</strong> <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
      <p><strong>Location:</strong> City, Country</p>
      <p><strong>Social:</strong></p>
      <ul class="social">
        <li><a href="#" target="_blank" rel="noopener">GitHub</a></li>
        <li><a href="#" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="#" target="_blank" rel="noopener">LinkedIn</a></li>
      </ul>
    </aside>
  </div>
</section>
