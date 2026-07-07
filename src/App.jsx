import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './composents/headers';
import ContactSection from'./page/contact';
import Home from './page/home';
import Footer from './composents/footer';
import Apropos from './page/apropos';
/*import Acceuil from './page/accueil';
*/

// Importe tes pages (à créer dans un dossier src/pages)
// import Home from './pages/Home';
// import Services from './pages/Services';

function App() {
  return (
    <Router>
      {/* Ta barre de navigation sera visible sur toutes les pages */}
      <Navbar />
      
      {/* Définition de tes routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<ContactSection/>}/>
         <Route path="/services" element={<Apropos/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;