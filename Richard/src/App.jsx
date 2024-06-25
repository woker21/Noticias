import styled from 'styled-components';
import AppRouter from './Router';

function App() {

  return <BodyContainer> <AppRouter /> </BodyContainer>;
}

export default App;


export const BodyContainer = styled.div`
  background-color: #fff;
  color: #333;
`