import React from 'react';
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

const DogCardNext = (props) => {



  return (

    <Card cover css={{ w: "100%", p: 0 }}>

      <Card.Body>
        
        <Card.Image
          src={props.dog.image.url}
          height={550}
          width="100%"
          object-fit="scale-down"
          alt="dog background"
        />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          position: "absolute",
          bgBlur: "#0f1114",
          borderTop: "$borderWeights$light solid $gray700",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#d1d1d1">
                  {props.dog.name}
                </Text> 
                <Text color="#d1d1d1" size={12}>
                  Height: {props.dog.height.metric} cms
                </Text>
                <Text color="#d1d1d1" size={12}>
                  Weight: {props.dog.weight.metric} kgs
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                css={{ color: "#94f9f0", bg: "#94f9f026" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  onClick={() => props.handleOpen(props.dog)}
                >
                  Learn More
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
    
  )
}

export default DogCardNext