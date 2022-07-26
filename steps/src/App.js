import './App.css';
import Header from './components/Header';
import Logo from './assets/logo.png';
import ProductN from './components/ProductN';
import Footer from './components/Footer';
import VerifyForm from './components/VerifyForm';

function App() {
  return (
    <div>
      <Header
        img={Logo}
        link1="Integrate Product"
        link2="About Us"
        link3="Contact Us"
        link4="Sign Up"
        buttonText="Sign Up"
        button={true}
      />
      <VerifyForm />
      {/* <ProductN /> */}
      <Footer />
    </div>
  );
}

export default App;
