import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Nopagefound from './components/Nopagefound'
import './App.css'
const App=()=>{
  return(
    <div className="container">
    <BrowserRouter>
      <Header/>
      <Routes>
       
        <Route exact path='/' Component={Home}/>
        <Route exact path='/about' Component={About}/>
        <Route exact path='/contact' Component={Contact}/>
        <Route exact path="*" Component={Nopagefound}/>
       

      </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App