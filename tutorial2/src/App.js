import {Routes, Route} from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetUp';
import FavouritesPage from './pages/Favourites';
import Layout from './components/layout/Layout'
function App() {
  return(
    <div>
      <Layout>
      <Routes>
      <Route exact path='/' element={<AllMeetupsPage/>}/>
      <Route path='/new-meetup' element={<NewMeetupPage/>}/>  
      <Route path='/favourites' element={<FavouritesPage/>}/>
      </Routes>
      </Layout>
      
    </div>
  )
    
  
}

export default App;
