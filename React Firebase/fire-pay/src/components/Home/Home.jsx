import React from 'react'
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About'
import Services from '../Services/Services';
import ContactForm from '../Form/ContactForm';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Main />
            <About />
            <Services />
            <ContactForm />
            <Footer />

        </>
    )
}

export default Home
