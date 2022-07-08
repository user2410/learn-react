import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counter';

function App() {
  // domain: loaclhost:3000/

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>Increment</button>
        <button onClick={() => dispatch(decrement(5))}>Decrement</button>
      </div>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<LayoutPage />}> */}
          <Route index element={<AllMeetupsPage />} />
          <Route path="meetups" element={<NewMeetupsPage />} />
          <Route path="favs" element={<FavoritesPage />} />
          {/* </Route> */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
