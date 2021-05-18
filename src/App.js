import {useState, useEffect} from 'react'
import './App.css';
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';
import { PageContainer } from './StyledComponents'

function App() {
  let bgA = localStorage.getItem('backgroundA')
  let bgB = localStorage.getItem('backgroundB')
  let localText = localStorage.getItem('text')
  const [changeColorA, setChangeColorA] = useState(false)
  const [changeColorB, setChangeColorB] = useState(false)
  const [text, setText] = useState(localText)
  useEffect(() => {
    localStorage.setItem('text', text)
    if(bgA === 'true') setChangeColorA(true)
    else if(bgB === 'true') setChangeColorB(true)

  }, [text])


  const changeColorFunc = (e) => {
    if(e.target.textContent === 'Change Color A') {
      setChangeColorA(!changeColorA)
      setChangeColorB(false)
      localStorage.setItem('backgroundA', !changeColorA)
      localStorage.setItem('backgroundB', false)
    } else {
      setChangeColorB(!changeColorB)
      setChangeColorA(false)
      localStorage.setItem('backgroundA', false)
      localStorage.setItem('backgroundB', !changeColorB)
    }

  }
  return (
    <PageContainer>
      <ComponentA changeColorFunc={changeColorFunc} changeColorValue={changeColorA} text={text} setText={setText}/>
      <ComponentB changeColorFunc={changeColorFunc} changeColorValue={changeColorB} text={text}/>
    </PageContainer>
  );
}

export default App;
