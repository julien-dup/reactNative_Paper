import * as React from 'react';
import {ScrollView, View} from 'react-native'
import {Card, Title, Paragraph } from 'react-native-paper';
import Data from '../Json/Data.json'





console.log(Data)


const CardComponent = () => (
  
  <ScrollView>
    {Data.map((l, k) => (
     
  <Card style={{flexDirection: 'row', borderWidth: 1, margin: 10 , borderColor: 'black', borderRadius: 0}} key={k} >
    <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-between' }}>
    <Card.Content >
    <Paragraph style={{marginTop: '10%', color: 'grey', fontSize: 17}}>{l.date}</Paragraph>
      <Title style={{fontWeight: 'bold'}}>{l.activity}</Title>
      
    </Card.Content>
    <Card.Cover source={{uri: l.img}} style={{width: 145, height: 90, borderWidth: 2, marginRight: '2%', marginTop: 10}}/>
    </View>
    
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: '10%'}}>
    <Card.Content >
    <Title style={{fontWeight: 'bold' , fontSize:  15}}>Distance</Title>
    <Paragraph style={{color: 'grey'}}>{l.distance}</Paragraph>
    </Card.Content>
    <Card.Content style={{marginRight: '5%'}}>
    <Title style={{fontWeight: 'bold' , fontSize:  15}}>Durée</Title>
    <Paragraph style={{color: 'grey'}}  >{l.timer}</Paragraph>
    </Card.Content>
    
    </View>

  </Card>
   
    ))
    }
    </ScrollView> 
);

export default CardComponent;