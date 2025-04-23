import logo from './logo.svg';
import './App.css';
import { Parent } from './Parent';
import { UserProvider } from './UserContext';
import { ThemeContext, ThemeProvider, ThemeSwitcher } from './Theme';

function App() {
  // const user = {name:'John Doe', age : 30}
  
  return (
    // <UserProvider>
    //   <Parent />
    // </UserProvider>
    // <ThemeProvider>
    //   <ThemeSwitcher />
    // </ThemeProvider>
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App;
