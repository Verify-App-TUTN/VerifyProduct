import './App.css';
import Header from './components/Header';
import Logo from './assets/logo.png';
import ProductN from './components/ProductN';

function App() {
  return (
    <div className="container">
      <Header
        img={Logo}
        link1="Integrate Product"
        link2="About Us"
        link3="Contact Us"
        link4="Sign Up"
        buttonText="Sign Up"
        button={true}
      />
      <ProductN />
    </div>
  );
}

export default App;
