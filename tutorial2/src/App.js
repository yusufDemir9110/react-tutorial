import {Routes, Route} from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetUp';
import FavouritesPage from './pages/Favourites';
import MainNavigation from './components/layout/MainNavigation'
function App() {
  return(
    <div>
      <MainNavigation/>
      <Routes>
      <Route exact path='/' element={<AllMeetupsPage/>}/>
      <Route path='/new-meetup' element={<NewMeetupPage/>}/>  
      <Route path='/favourites' element={<FavouritesPage/>}/>
      </Routes>
    </div>
  )
    
  
}

export default App;
