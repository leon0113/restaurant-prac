import { Chef, FindUs, Footer, Gallery, Header, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

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
