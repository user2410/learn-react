import {Route, Routes, BrowserRouter} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
// import NewMeetupsPage from './pages/NewMeetup';
// import FavoritesPage from './pages/Favorites';

function App() {
  // domain: loaclhost:3000/

  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
