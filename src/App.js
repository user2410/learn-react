import {Route, Routes} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  // domain: loaclhost:3000/

  return (
  <div>
      <MainNavigation />
      <Routes>
        {/* <Route path="/" element={<LayoutPage />}> */}
        <Route index element={<AllMeetupsPage />} />
        <Route path="meetups" element={<NewMeetupsPage />} />
        <Route path="favs" element={<FavoritesPage />} />
        {/* </Route> */}
      </Routes>
  </div>
  );
}

export default App;
