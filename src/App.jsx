import './App.css';
import { Navbar } from './components';
import { Chef, FindUs, Footer, Gallery, Header, SpecialMenu } from './container';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <SpecialMenu />
    {/* <SpecialMenu />
    <SpecialMenu /> */}
    {/* <SpecialMenu /> */}
    {/* <AboutUs /> */}
    <Chef />
    <Chef />
    {/* <Intro /> */}
    {/* <Laurels /> */}
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
