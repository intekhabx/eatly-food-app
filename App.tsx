import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './src/components/Onboarding';
import Login from './src/components/Login';


export default function App() {
  return (
      // <Onboarding />
      <Login />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
