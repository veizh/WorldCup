import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './pages/form/_Form';
import Accueil from './pages/acceuil/Accueil';
import Rating from './pages/rating/rating';
import Rules from './pages/rules/Rules';
import News from './pages/news/News';
import Bet from './pages/bet/Bet';
import FormPoule from './pages/bet/formPoule/FormPoule';
import PostNews from './pages/Admin/PostNews';
import PostResults from './pages/Admin/PostResults';
import PostResultElim from './pages/Admin/PostresultElim';
import Stats from './pages/Admin/Stats'
import FormElim from './pages/bet/formElim/formElim';
import FormBonus from './pages/bet/formPoule/FormBonus';
import FormVainqueurs from './pages/bet/formElim/formVainqueurs';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Router>
      <App> 
          <Routes>
            <Route path="/Home" element={<Accueil />} />
            <Route path="/SignIn" element={<Form signIn/>} />
            <Route path="/LogIn" element={<Form logIn/>} />
            <Route path="/" element={<Form logIn/>} />  
            <Route path="/Bet" element={<Bet />} />
            <Route path="/Admin/PostNews" element={<PostNews />} />
            <Route path="/Admin/PostResults" element={<PostResults />} />
            <Route path="/Bet/Poule/:poule" element={<FormPoule />} />
            <Route path="/Bet/Eliminatoire" element={<FormElim />} />
            <Route path="/Rules" element={<Rules />} />
            <Route path="/Bet/bonus" element={<FormBonus />} />
            <Route path="/News" element={<News />} />
            <Route path="/Rating" element={<Rating />} />
            <Route path="/Bet/Vainqueurs" element={<FormVainqueurs />} />
            <Route path="/Admin/PostResultElim" element={<PostResultElim />} />
            <Route path="/Admin/stats" element={<Stats />} />


          </Routes>
      </App>
    </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
