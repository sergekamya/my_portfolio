import React from "react";
import { Card, Image } from "semantic-ui-react";

const AboutCard = ({ passion }) => {
  return (
    <Card>
      <Image src={passion.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{passion.name}</Card.Header>
        <Card.Description>{passion.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default AboutCard;
