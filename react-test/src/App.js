import BlogState from "./components/BlogState";
import Blogpost from "./components/Blogpost";
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    
    <BlogState>
      
      <Routes>
      
        <Route path= '/posts/:id' element={<Blogpost/>}/>
        
      </Routes>
  
    </BlogState>
  );
}

export default App;
