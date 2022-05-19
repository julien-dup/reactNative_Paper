import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import NavigationTabs from './assets/navigation/NavigationTab';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './assets/screen/HomeScreen';
import AppbarComponent from './assets/components/Appbar';

function App() {

  return (
    
    <PaperProvider>
        
   

    <AppbarComponent />
    
      <NavigationTabs />
  
    
    </PaperProvider>
   
    
  );
}


export default App

//* paper provider //
// safe aera //