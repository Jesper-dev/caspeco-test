import {useState} from 'react'
import './App.css';
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';
import { PageContainer } from './StyledComponents'

function App() {
  const [changeColorA, setChangeColorA] = useState(false)
  const [changeColorB, setChangeColorB] = useState(false)
  const changeColorFunc = (e) => {
    if(e.target.textContent === 'Change Color A') {
      setChangeColorA(!changeColorA)
      setChangeColorB(false)
    } else {
      setChangeColorB(!changeColorB)
      setChangeColorA(false)
    }

  }
  return (
    <PageContainer>
      <ComponentA changeColorFunc={changeColorFunc} changeColorValue={changeColorA}/>
      <ComponentB changeColorFunc={changeColorFunc} changeColorValue={changeColorB}/>
    </PageContainer>
  );
}

export default App;
