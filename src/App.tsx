import { BrowserRouter, Route , Routes} from "react-router-dom";


function App() {

  return (
    <BrowserRouter basename="/home">
    <Routes>
      <Route path="/" element={(<>vai</>)}/>
    </Routes>
      
    </BrowserRouter>
      
    
  )
}

export default App
