import './App.css';
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';
import { PageContainer } from './StyledComponents'

function App() {
  return (
    <PageContainer>
      <ComponentA />
      <ComponentB />
    </PageContainer>
  );
}

export default App;
