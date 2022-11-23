import "./App.css";
import {
  Container,
  LightHalf,
  DarkHalf,
  ButtonOne,
  ButtonTwo,
} from "./app.styles";

function App() {
  return (
    <Container>
      <LightHalf>
        <ButtonOne>Hover me!</ButtonOne>
      </LightHalf>
      <DarkHalf>
        <ButtonTwo>Hover me!</ButtonTwo>
      </DarkHalf>
    </Container>
  );
}

export default App;
