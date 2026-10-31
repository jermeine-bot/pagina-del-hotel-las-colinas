import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Wave from './components/Wave.jsx';
import About from './components/About.jsx';
import Rooms from './components/Rooms.jsx';
import Amenities from './components/Amenities.jsx';
import Location from './components/Location.jsx';
import Testimonials from './components/Testimonials.jsx';
import Gallery from './components/Gallery.jsx';
import Booking from './components/Booking.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Wave fill="#fffaf2" />
        <About />
        <Wave fill="#caf0f8" />
        <Rooms />
        <Wave fill="#fffaf2" />
        <Amenities />
        <Wave fill="#00b4d8" />
        <Location />
        <Wave fill="#ffd60a" />
        <Testimonials />
        <Wave fill="#2d6a4f" />
        <Gallery />
        <Wave fill="#fffaf2" />
        <Booking />
        <Wave fill="#1d2d35" />
      </main>
      <Footer />
    </div>
  );
}
