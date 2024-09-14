import 'react-native-gesture-handler';
import Routes from './src/routes';
import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Routes/>
    </ThemeProvider>
  );
}
// Cores
// #1B1A26 - preto
// #32313c - tom acima preto

// #F5F5F5 - branco
// #DDDDDD - tom abaixo branco

// #F2600C - laranja