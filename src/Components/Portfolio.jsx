/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/projects_section.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Check out my blogs helping beginners to kick start their career 🎉",
    description:
      "Collaboration to create a beginner friendly articles to help explain different data related concepts.",
    url: "https://medium.com/@khanbilal6172",
  },
  {
    title: "Check out some of my projects",
    description:
      "I have created many projects you can access it and know more about me byvisiting my Github",
    url: "https://github.com/AhsanBilal157",
  },
  {
    title: "My Main Project",
    description:
      "I am with my team taking an initiative to revolutionize the agriculture system of Pakistan. You can visit our site form the link below",
    url: "https://agfow.com",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "You want to know more about me connect with me on Linkedin",
    url: "www.linkedin.com/in/ahsan-bilal-khan-14235b212",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
