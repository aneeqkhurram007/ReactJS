import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Services from './components/Services/Services';
import ContactForm from './components/Form/ContactForm';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <About />
      <Services />
      <ContactForm />
    </>
  );
}

export default App;
