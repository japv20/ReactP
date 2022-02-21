import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Nav from './components/Navmen'
import Slider from './components/slider/Slider'
import Form from './components/BookForm'

//MONGODB
// const mongoose = require('mongoose');
// import mongoose from 'mongoose'
// mongodb+srv://latinas:latinas@cluster0.djw59.mongodb.net/Data
// mongoose.connect('mongodb+srv://latinas:latinas@cluster0.djw59.mongodb.net/test', {
  // useUnifiedTopology: true,
  // useNewUrlParwer: true,
// }) .then(console.log('Connected to mongoDB'))

function App() {
  return (
    <div className="App">
      <Header /> <br/>
      <Nav /> <br/>
      <Form /> <br/>
      <Slider /> <br/>
      <Main /> <br/>
      {/* <Greet name="Jack" heroName="Batman">
        <p> This is children props</p>
      </Greet>
      <Greet name="Nat" heroName="Superman">
        <button>Click me</button>
      </Greet>
      <Greet name="Kei" heroName="Dino">
      <p> This is children props</p>
      </Greet>
      <Welcome name="classyJack" heroName="Batman"/>
      <Welcome name="classyNat" heroName="Superman"/>
      <Welcome name="classicKei" heroName="Dino"/> */}

      <Footer />
    </div>
  );
}

export default App;