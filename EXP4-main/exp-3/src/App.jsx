import './App.css'
import ProductList from './ProductList'
import CartView from './CartView'

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: '#f7f7f7' }}>Shopping Cart Management System</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
        <ProductList />
        <CartView />
      </div>
    </div>
  )
}

export default App