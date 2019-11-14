import React from "react";
import { Card, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

const List = props => {
  return (
    <CardDeck>
        {props.lists.map(list => (
        <Card key={list.id}>
            <CardBody>
            <CardTitle>{list.name}</CardTitle>
            <CardSubtitle>{list.email}</CardSubtitle>
            <CardText>{list.role}</CardText>
            </CardBody>
        </Card>
        ))}
    </CardDeck>
  );
};

export default List;