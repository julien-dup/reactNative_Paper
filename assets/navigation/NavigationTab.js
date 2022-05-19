// le fichier s'appelle navigationTabs mais il devrait s'appeler bottomNavigation cf react native paper

import React from 'react'
import { BottomNavigation, Text } from 'react-native-paper';
import CardComponent from '../components/Card';
import HomeScreen from '../screen/HomeScreen';



const MusicRoute = () => {<Text>Home</Text>;
 return (
   
 <CardComponent />
 )
 }
const AlbumsRoute = () => <Text>histo</Text>;

const RecentsRoute = () => <Text>ajout</Text>;

const HammerRoute = () => <Text>parametre</Text>;

const NavigationTabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'home', icon: 'home' },
    { key: 'histo', title: 'histo', icon: 'album' },
    { key: 'ajout', title: 'ajout', icon: 'history' },
    { key: 'parametre', title: 'parametre', icon: 'cog' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: MusicRoute,
    histo: AlbumsRoute,
    ajout: RecentsRoute,
    parametre: HammerRoute,
  });


return (
  <BottomNavigation
    navigationState={{ index, routes }}
    onIndexChange={setIndex}
    renderScene={renderScene}
  />
);
};

export default NavigationTabs;