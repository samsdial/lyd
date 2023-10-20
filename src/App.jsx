import About from "./component/About";
import CarouselEnd from "./component/CarouselEnd";
import Event from "./component/Event";
import Footer from "./component/Footer";
import FriendsFamilyStart from "./component/FriendsFamilyStart";
import GalleryStart from "./component/GalleryStart";
import Navbar from "./component/Navbar";
import Rsvp from "./component/Rsvp";

function App() {
  return (
    <>
      <Navbar />
      <CarouselEnd />
      <Event />
      <GalleryStart />
      <FriendsFamilyStart />
      <About />
      <Rsvp />
      <Footer />
    </>
  );
}

export default App;
