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
              title="Pokemon Theme Team"
              description="Pokemon Theme Team is a Heroku app built with a Django backend framework that uses the RESTful PokéAPI to generate 6 different Pokémon of similar type. The app uses vanilla HTML, CSS, and JS to construct its UI.
              In fact, if you type a number after the link provided, you can generate a team based on a certain Pokémon's unique ID number."
              ghLink="https://github.com/gbote/Pokemon-Theme-Team"
              demoLink="https://pokemonthemeteam.herokuapp.com/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hangman}
              isBlog={false}
              title="Hangman Game"
              description="Pokemon Theme Team is a Heroku app built with a Django backend framework that uses the RESTful PokéAPI to generate 6 different Pokémon of similar type. The app uses vanilla HTML, CSS, and JS to construct its UI.
              In fact, if you type a number after the link provided, you can generate a team based on a certain Pokémon's unique ID number."
              ghLink="https://github.com/gbote/Pokemon-Theme-Team"
              demoLink="https://pokemonthemeteam.herokuapp.com/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={temperature}
              isBlog={false}
              title="Temperature Conversion App"
              description="Pokemon Theme Team is a Heroku app built with a Django backend framework that uses the RESTful PokéAPI to generate 6 different Pokémon of similar type. The app uses vanilla HTML, CSS, and JS to construct its UI.
              In fact, if you type a number after the link provided, you can generate a team based on a certain Pokémon's unique ID number."
              ghLink="https://github.com/gbote/Pokemon-Theme-Team"
              demoLink="https://pokemonthemeteam.herokuapp.com/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={palindrome}
              isBlog={false}
              title="Palindrome Checker"
              description="Pokemon Theme Team is a Heroku app built with a Django backend framework that uses the RESTful PokéAPI to generate 6 different Pokémon of similar type. The app uses vanilla HTML, CSS, and JS to construct its UI.
              In fact, if you type a number after the link provided, you can generate a team based on a certain Pokémon's unique ID number."
              ghLink="https://github.com/gbote/Pokemon-Theme-Team"
              demoLink="https://pokemonthemeteam.herokuapp.com/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carsandbrands}
              isBlog={false}
              title="Cars &amp; Brands CRUD App"
              description="Pokemon Theme Team is a Heroku app built with a Django backend framework that uses the RESTful PokéAPI to generate 6 different Pokémon of similar type. The app uses vanilla HTML, CSS, and JS to construct its UI.
              In fact, if you type a number after the link provided, you can generate a team based on a certain Pokémon's unique ID number."
              ghLink="https://github.com/gbote/Pokemon-Theme-Team"
              demoLink="https://pokemonthemeteam.herokuapp.com/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forum}
              isBlog={false}
              title="&quot;Online&quot; Forum"
              description="Pokemon Theme Team is a Heroku app built with a Django backend framework that uses the RESTful PokéAPI to generate 6 different Pokémon of similar type. The app uses vanilla HTML, CSS, and JS to construct its UI.
              In fact, if you type a number after the link provided, you can generate a team based on a certain Pokémon's unique ID number."
              ghLink="https://github.com/gbote/Pokemon-Theme-Team"
              demoLink="https://pokemonthemeteam.herokuapp.com/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={securetodo}
              isBlog={false}
              title="Secure To-Do List"
              description="Pokemon Theme Team is a Heroku app built with a Django backend framework that uses the RESTful PokéAPI to generate 6 different Pokémon of similar type. The app uses vanilla HTML, CSS, and JS to construct its UI.
              In fact, if you type a number after the link provided, you can generate a team based on a certain Pokémon's unique ID number."
              ghLink="https://github.com/gbote/Pokemon-Theme-Team"
              demoLink="https://pokemonthemeteam.herokuapp.com/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="Top Trending News Site"
              description="Pokemon Theme Team is a Heroku app built with a Django backend framework that uses the RESTful PokéAPI to generate 6 different Pokémon of similar type. The app uses vanilla HTML, CSS, and JS to construct its UI.
              In fact, if you type a number after the link provided, you can generate a team based on a certain Pokémon's unique ID number."
              ghLink="https://github.com/gbote/Pokemon-Theme-Team"
              demoLink="https://pokemonthemeteam.herokuapp.com/" 
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
