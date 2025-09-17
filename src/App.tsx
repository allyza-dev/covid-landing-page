import './App.scss'
import Navigation from './components/Navigation'
import Header from './components/Header'
import WhatIsCovid from './components/WhatIsCovid'
import Contagion from './components/Contagion'
import Symptoms from './components/Symptom'
import WhatShouldWedo from './components/WhatShouldWeDo';
import Footer from './components/Footer'

function App() {

  return (
    <div className="app">
        <Navigation />
        <Header />
        <WhatIsCovid/>  
        <Contagion  />
        <Symptoms />
        <WhatShouldWedo />
        <Footer />
    </div>
  )
}

export default App
