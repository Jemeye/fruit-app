import './App.css'
import Footer from './components/footer'
import FruitList from './components/fruit-list'
import Header from './components/header'

function App() {

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
