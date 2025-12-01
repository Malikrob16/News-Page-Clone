import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NewsList from './components/NewsList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <HeroSection />
        <NewsList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
