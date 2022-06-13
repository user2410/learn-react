import {Route, Routes} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  // domain: loaclhost:3000/

  return (
  <Layout>
      <Routes>
        {/* <Route path="/" element={<LayoutPage />}> */}
        <Route index element={<AllMeetupsPage />} />
        <Route path="meetups" element={<NewMeetupsPage />} />
        <Route path="favs" element={<FavoritesPage />} />
        {/* </Route> */}
      </Routes>
  </Layout>
  );
}

export default App;
