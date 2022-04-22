import { Grid, Card } from "@nextui-org/react";
import { DogCardNext } from "./DogCardNext";

export default function DogGridNextUI(props) {

   const arrayDogs = props.dogs.map((dog, i) => {
     return (
       <Grid key={i} xs={4}>
          <Card  css={{ h: "15" }}>
            <DogCardNext dog={dog} />
            </Card>
       </Grid>
    )
  })
  
  return (
    <Grid.Container gap={1} justify="center">
      {arrayDogs}
      
    </Grid.Container>
  );
}
