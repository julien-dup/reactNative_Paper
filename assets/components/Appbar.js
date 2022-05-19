import * as React from 'react';
import { Appbar, Avatar} from 'react-native-paper';
import { StyleSheet, View } from 'react-native';



const AppbarComponent = () => (

 <Appbar style={{marginTop: '8%'}}>
 
    <Appbar.Content title='Activity tracker' titleStyle={{color: 'black', fontWeight: 'bold', fontSize: 25}} ></Appbar.Content>
    
    <Avatar.Icon size={32} icon="checkbox-blank-circle-outline" style={{backgroundColor: 'white', marginRight: '5%'}} />
  </Appbar>

 );

export default AppbarComponent

