import Navbar from './Components/UI/Navbar';
import { Switch, Route } from 'react-router-dom'


import '../node_modules/tailwindcss/dist/tailwind.min.css'
import './Assets/CSS/app.css'
import './Assets/CSS/fonts.css'
import './Assets/CSS/mobile.css'

import Home from './Pages/PublicPages/Home';
import Courses from './Pages/PublicPages/Courses';
import CourseName from './Pages/PublicPages/CourseName';
import { Profile } from './Pages/ProfilePages/Profile';
import Footer from './Components/UI/Footer';
import EnrollCourse from './Pages/PublicPages/EnrollCourse';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/courses' component={Courses} />
        <Route exact path='/courses/:id' component={CourseName} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/enroll' component={EnrollCourse} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
