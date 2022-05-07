import { useState } from "react";
import styled from "styled-components";
import Main from "./pages/Main";

function App() {
  const [changeColor, setChangeColor] = useState(1)
  return (
    <Wrapper changeColor={changeColor}>
      <Main  setChangeColor={setChangeColor} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${({changeColor}) => {
    if(changeColor===1) {
      return "hsl(222, 26%, 31%)"
    }
    else if(changeColor===2) {
      return "hsl(0, 0%, 90%)"
    }
    else if(changeColor===3) {
      return "hsl(268, 75%, 9%)"
    }
  }};

  display: flex;
  align-items: center;
  justify-content: center;
`;


// changeColor===1 ? "" : changeColor===2 ? "" : changeColor===3 ? ""}