import './App.css';
import SignUpForm from './SignUpForm';
import GoogleMapReact from 'google-map-react';


function App() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <div className="App">
    <iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150380.79356243566!2d27.247370541433828!3d53.91930850000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc5cc6a29de8b%3A0x935f552bb1e849a!2z0JHQpiDQntC70YzRiNC10LLRgdC60L7Qs9C-IDIy!5e0!3m2!1sru!2sby!4v1670783360142!5m2!1sru!2sby" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default App;
