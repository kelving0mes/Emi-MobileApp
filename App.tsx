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