import styled from "styled-components";
import Main from "./pages/Main";

function App() {
  return (
    <Wrapper>
      <Main/>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: hsl(222, 26%, 31%);

  display: flex;
  align-items: center;
  justify-content: center;
`;
