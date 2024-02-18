import { useEffect } from 'react';
import './App.css'
import Footer from './components/footer'
import FruitList from './components/fruit-list'
import Header from './components/header'
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('user');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Header></Header>
      <main>
        <FruitList></FruitList>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
