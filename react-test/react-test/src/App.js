import BlogState from "./components/BlogState";
import Blogpost from "./components/Blogpost";
import {Route, Routes} from 'react-router-dom'
import Blogcomments from "./components/Blogcomments";
function App() {
  return (
    <BlogState>
    
      <Routes>
        <Route exact path= '/posts' element={<Blogpost/>}/>
        <Route path= '/comments' element={<Blogcomments/>}/>
      </Routes>
  
    </BlogState>
  );
}

export default App;
