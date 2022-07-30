import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import envisage from "../../Assets/Projects/envisage.png";
import connect2health from "../../Assets/Projects/connect2health.png";
import pokemontheme from "../../Assets/Projects/pokemontheme.png";
import palindrome from "../../Assets/Projects/palindrome.png";
import temperature from "../../Assets/Projects/temperature.png";
import hangman from "../../Assets/Projects/hangman.png";
import news from "../../Assets/Projects/news.png";
import carsandbrands from "../../Assets/Projects/carsandbrands.png";
import securetodo from "../../Assets/Projects/securetodo.png";
import forum from "../../Assets/Projects/forum.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">SWE Projects &amp; Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I have worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={envisage}
              isBlog={false}
              isVideoDemo={false}
              title="Envisage"
              description="Envisage is a platform for spreading awareness of anti-Asian hate. Through the publication of unique Asian cultural assets and facts/figures that depict the obstacles and burdens past and present Asian Americans face, the platform spotlights Asian Americans who have created a positive impact for their own community. 
              The website was built with vanilla HTML, CSS, and JS. The chatbot was developed through Dialogflow and JS; it was integrated in popular communication apps like Line and Telegram."
              ghLink="https://github.com/usercspa/Envisage"
              demoLink="https://envisage-1.usercspa.repl.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connect2health}
              isBlog={false}
              isVideoDemo={false}
              title="Connect2Health"
              description="Connect2Health is a website that provides information about public healthcare and hospital locations in proximity to the user's input in the United States. It also offers
              a hub of resources about topics such as COVID-19 and Medicare. Many of these topics can be discussed through a chat bot implemented via Microsoft Azure. The Google Maps API along with vanilla front-end technologies
              were used to build the website."
              ghLink="https://github.com/gbote/Connect2Health"
              demoLink="https://connect2health.cmdk07.repl.co"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokemontheme}
              isBlog={false}
              isVideoDemo={false}
              title="Pokemon Theme Team"
              description="Pokemon Theme Team is a Heroku app built with a Django backend framework that uses the RESTful PokéAPI to generate 6 different Pokémon of similar type. The app uses vanilla HTML, CSS, and JS to construct its user interface (UI).
              Everytime you reload the page, you will be prompted with 6 similar Pokemon that contains their main type and their starting experience."
              ghLink="https://github.com/gbote/Pokemon-Theme-Team"
              demoLink="https://pokemonthemeteam.herokuapp.com/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hangman}
              isBlog={false}
              isVideoDemo={false}
              title="Hangman Game"
              description="My Hangman Game was the first ever (and biggest) React project I made. I also experimented with using Vite as a supplement in helping build React projects, which I found helpful.
              Whilst I followed the README.md file in creating the app's required components and integrated a given JSON array of words to supply the game with, I decided to do more. In later releases, I changed the code such that 1) words come from the The Movie Database API and 2) 6 incorrect guesses result in a game over. If given more time, I want to make the UI more pleasing to the eye by customizing the CSS files. I appreciate Tünde Szirák for allowing me to play with the code and learn more about the complexities of React components!"
              ghLink="https://github.com/gbote/CodePlatoon/tree/main/react-hangman"
              demoLink="https://hangman-kappa.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={temperature}
              isBlog={false}
              isVideoDemo={false}
              title="Temperature Conversion App"
              description="The Temperature Conversion App takes in any U.S. ZIP Code and outputs the current temperature at that location to the nearest 3 decimal places. It is also both in the Celcius and Fahrenheit scales.
              Similar to the Hangman Game, I implemented an API called the OpenWeather API to gather the correct information for a certain ZIP Code's temperature. Due to time constraints, I wish I included more information regarding the humidity and wind speeds of a ZIP Code. This project was also configured under the Vite/React framework."
              ghLink="https://github.com/gbote/CodePlatoon/tree/main/react-temperature-conversion"
              demoLink="https://temperature-converter-ten.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={palindrome}
              isBlog={false}
              isVideoDemo={false}
              title="Palindrome Checker"
              description="Palindrome Checker is an app improved upon a design prototype built using Vite &amp; React that takes in a word via a text box, captures that typed word, and outputs whether or not that word is a palindrome.
              Although it is a simpler React project compared to my Portfolio Website or my Hangman Game, I wished I included more CSS styling to make the app a bit more appealing. In other words, if given more time, I do not want this app to just look like a &quot;box.&quot;"
              ghLink="https://github.com/gbote/CodePlatoon/tree/main/react-palindrome"
              demoLink="https://palindrome-checker-omega.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carsandbrands}
              isBlog={false}
              isVideoDemo={true}
              title="Cars &amp; Brands CRUD App"
              description="The Cars &amp; Brands CRUD App is my first ever Django project dealing with a SQL Database. Given the recommended steps in creating a database, I experimented with PostgreSQL and its numerous functions to create and manipulate databases to my liking.
              Unfortunately, the only issue I encountered when trying to publish this project is trying to establish a new database under Heroku deployment. If given more time, I would deploy the backend project with a template database so that each user's listed cars and brands are shown properly."
              ghLink="https://github.com/gbote/CodePlatoon/tree/main/django-cars-and-brands"
              demoLink="https://youtu.be/CmkA2x_pmA0" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forum}
              isBlog={false}
              isVideoDemo={false}
              title="&quot;Online&quot; Forum"
              description="I created an &quot;Online&quot; Forum that allows the end user to create posts and comment on pre-existing posts. Given the nature of the program running a NoSQL database and only using CSV files to persist with the data, the program may be glitchy and sometimes might not display customly added posts and comments.
              Originally a text-based Python program, I had to refactor many code snippets into making sure they comply with Django framework standards, including modifying view handlers, templates, and routing. Also, I experimented with Bootstrap, which allowed the UI to look more appealing."
              ghLink="https://github.com/gbote/Online-Web-Forum"
              demoLink="https://myownonlineforum.herokuapp.com/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={securetodo}
              isBlog={false}
              isVideoDemo={true}
              title="Secure To-Do List"
              description="Another Django project that I implemented was a To-Do List that required a user's e-mail and password to log in to their current To-Do items. I was able to figure out how to keep a dictionary of users' e-mails and their respective passwords.
              At this point, I was more comfortable with dealing with SQL Databases and figuring out how to deal with different relationships (i.e., one-to-one, one-to-many, many-to-many) in Django Object-Relational Mappers (ORMs). Again, similar to the Cars &amp; Brands CRUD App, I could not figure out how to make a template database for Heroku deployment; if given more time, I would love for this issue to be resolved."
              ghLink="https://github.com/gbote/CodePlatoon/tree/main/django-to-do"
              demoLink="https://youtu.be/MH2DtbolmUM" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              isVideoDemo={false}
              title="Top Trending News Site"
              description="This Top Trending News Site is my second major Vite/React project in a while, where I had to integrate the Hacker News API (i.e., a Firebase containing JSON objects of HN articles).
              Unfortunately, some of these JSON objects do not contain a URL tag, leading to some of the links being broken. Nevertheless, I figured out how to route different types of articles via a Navigation Bar and listed important information of an article, like its publication date. If given more time, I would like to implement a search bar that searches for key matches in the articles' titles. Also, I have included a search bar in hopes that the user searches for specific articles; however, it has no functionality yet."
              ghLink="https://github.com/gbote/News-Site"
              demoLink="https://news-site-coral.vercel.app/" 
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
