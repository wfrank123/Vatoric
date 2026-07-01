---
layout: default
title: Projects
---

<section id="projects-page" class="projects container" aria-labelledby="projects-heading">
  <h2 id="projects-heading">Projects</h2>
  <p class="section-intro">A longer list of projects and case studies.</p>
  <div class="projects-grid">
    {% for project in site.data.projects %}
    <article class="card project-card">
      <div class="card-media"><img src="{{ project.image }}" alt="{{ project.title }}"></div>
      <div class="card-body">
        <h3 class="card-title">{{ project.title }}</h3>
        <p class="card-excerpt">{{ project.description }}</p>
        <p class="card-meta">{{ project.meta }}</p>
      </div>
    </article>
    {% endfor %}
  </div>
</section>
