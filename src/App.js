import logo from './logo.svg';
import './App.css';
import RouterConfig from './navigation/RouterConfig';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Header';
import { Container } from '@mui/material';
import { Footer } from './Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <div style={{ paddingTop: "64px" }}>
            <RouterConfig />
            <Footer />
          </div>
        </Container>
      </Router>
    </>
  );
}

export default App;
