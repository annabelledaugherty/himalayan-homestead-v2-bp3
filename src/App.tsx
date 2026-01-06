import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { StayOptions } from './pages/StayOptions';
import { WholeHomeRetreat } from './pages/WholeHomeRetreat';
import { TwoBhkHomestay } from './pages/TwoBhkHomestay';
import { PrivateRooms } from './pages/PrivateRooms';
import { Amenities } from './pages/Amenities';
import { Experiences } from './pages/Experiences';
import { Gallery } from './pages/Gallery';
import { Location } from './pages/Location';
import { Policies } from './pages/Policies';
import { Booking } from './pages/Booking';
import { Contact } from './pages/Contact';
import { Testimonials } from './pages/Testimonials';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="stay-options" element={<StayOptions />} />
          <Route path="stay-options/whole-home-retreat" element={<WholeHomeRetreat />} />
          <Route path="stay-options/2bhk-homestay" element={<TwoBhkHomestay />} />
          <Route path="stay-options/private-rooms" element={<PrivateRooms />} />
          <Route path="amenities" element={<Amenities />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="location" element={<Location />} />
          <Route path="policies" element={<Policies />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="booking" element={<Booking />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
