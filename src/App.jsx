import "./App.css"
import { Button, Container, Grid, TextInput, Title } from "@mantine/core"

function App() {
  return (
    <>
      <Container fluid>
        <header>
          <Title order={1}>Pokemon App</Title>
        </header>

        <Grid mt={{ base: 40 }}>
          <Grid.Col sm={7}>
            <TextInput
              label="Ingrese el nombre del pokemon"
              placeholder="bulbasaur ..."
            />
          </Grid.Col>
          <Grid.Col sm={5}>
            <Button variant="light">Search</Button>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

export default App
