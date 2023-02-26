import './App.css';
import LandingPage from './components/LandingPage.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostView from './components/PostView.js';
import UploadForm from './components/UploadForm';

function App() {
  return (<>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/postview' element={<PostView />}/>
          <Route path='/upload' element={<UploadForm />}/>
        </Routes>
      </BrowserRouter>

    </div>
  </>);
}

export default App;