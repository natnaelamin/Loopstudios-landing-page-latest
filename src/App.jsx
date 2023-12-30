import Header from "./Components/Header";
import Interactive from "./Components/Interactive";
import Creations from "./Components/Creations";
import Footer from "./Components/footer";
import Modal from "./Components/Modal";
import { useState } from "react";


function App() {
  const [isVisible, setIsVisible] = useState(false)

  const visibility = () => {
    setIsVisible(!isVisible)
  }
  console.log(isVisible)
  

  const choose = ['About', 'Careers', 'Events', 'Products', 'Support'];

  return (
    <>
      <Header choose={choose} visibility={visibility}/>
      <Interactive/>
      <Creations />
      <Footer choose={choose}/>
      <Modal choose={choose} visible={isVisible} visibility={visibility}/>
    </>
  )
}

export default App
