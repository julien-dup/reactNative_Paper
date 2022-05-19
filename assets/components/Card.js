import * as React from 'react';
import {ScrollView, View, Text} from 'react-native'
import {Card, Title, Paragraph } from 'react-native-paper';
import Data from '../Json/Data.json'
import TitleComponent from './TitleComponent';





console.log(Data)


const CardComponent = () => (
  
  <>
  
   <Text style={{fontWeight: 'bold', fontSize: 30, marginLeft: '5%'}}>Home</Text>
  
  <ScrollView>
    {Data.map((l, k) => (
     
  <Card style={{flexDirection: 'row', borderWidth: 1, margin: 10 , borderColor: 'black', borderRadius: 0, padding: 10}} key={k} >
    <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-between' }}>
    <Card.Content >
    <Paragraph style={{marginTop: '10%', color: 'grey', fontSize: 17}}>{l.date}</Paragraph>
      <Title style={{fontWeight: 'bold'}}>{l.activity}</Title>
      
    </Card.Content>
    <Card.Cover source={{uri: l.img}} style={{width: 135, height: 90, borderWidth: 2, marginRight: '2%', marginTop: 10}}/>
    </View>
    
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: '3%'}}>
    <Card.Content >
    <Title style={{fontWeight: 'bold' , fontSize:  15}}>Distance</Title>
    <Paragraph style={{color: 'grey', marginTop: '-15%'}}>{l.distance}</Paragraph>
    </Card.Content>
    <Card.Content style={{marginRight: '5%'}}>
    <Title style={{fontWeight: 'bold' , fontSize:  15}}>Durée</Title>
    <Paragraph style={{color: 'grey', marginTop: '-15%'}}  >{l.timer}</Paragraph>
    </Card.Content>
    
    </View>

  </Card>
   
    ))
    }
    </ScrollView> 
    </>
);

export default CardComponent;