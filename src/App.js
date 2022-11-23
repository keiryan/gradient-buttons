import "./App.css";
import {
  Container,
  LightHalf,
  DarkHalf,
  ButtonOne,
  ButtonTwo,
} from "./app.styles";
import Button from "./Button/button";

function App() {
  return (
    <Container>
      <LightHalf>
        <ButtonOne
          gradient={{
            deg: "90deg",
            stops: [
              "rgba(131,58,180,1) 0%",
              "rgba(253,29,29,1) 50%,",
              "rgba(252,176,69,1) 100%),",
            ],
          }}
        >
          Hover me!
        </ButtonOne>
      </LightHalf>
      <DarkHalf>
        <ButtonTwo
          gradient={{
            deg: "90deg",
            stops: [
              "rgba(131,58,180,1) 0%",
              "rgba(253,29,29,1) 50%,",
              "rgba(252,176,69,1) 100%),",
            ],
          }}
          text=""
        >
          Hover me!
        </ButtonTwo>
      </DarkHalf>
    </Container>
  );
}

export default App;
