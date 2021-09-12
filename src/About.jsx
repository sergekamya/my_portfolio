import React, { useState, useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import AboutCard from "./AboutCard";
import axios from "axios";

const About = () => {
  const [passions, setPassions] = useState([]);

  useEffect(() => {
    axios.get("./data/about.json").then((response) => {
      setPassions(response.data);
    });
  }, []);

  let passionsList = passions.map((passion) => {
    return (
      <div id={`passion-${passion.id}`} key={passion.id}>
        <AboutCard passion={passion} />
      </div>
    );
  });

  return (
    <Container>
      <h1 id="passions-header">My Passions</h1>
      <Grid>{passionsList}</Grid>
    </Container>
  );
};

export default About;
