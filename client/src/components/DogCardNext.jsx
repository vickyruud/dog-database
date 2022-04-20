import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const DogCardNext = (props) => (
  <Card cover css={{ w: "100%", p: 0 }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          {props.dog.name}
        </Text>
        <Text h3 color="white">
          {props.dog.bred_for}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body>
      <Card.Image
        src={props.dog.image.url}
        height={400}
        width="100%"
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
              <Text color="#d1d1d1" size={12}>
                Height: {props.dog.height}
              </Text>
              <Text color="#d1d1d1" size={12}>
                Weight: {props.dog.weight}
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
              >
                Click Me
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
