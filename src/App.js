import './App.css';
import Checkout from './pages/CheckoutPage';

function App() {

  return (
    <div className="App">
      <Checkout
        name='test'
        description='you sold test items'
        amount={4.99}
      />
    </div>
  );
}

export default App;
