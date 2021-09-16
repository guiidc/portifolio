import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import './css/App.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Technologies />
    </div>
  );
}

export default App;
