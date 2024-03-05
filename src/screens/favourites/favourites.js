//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCard from '../../components/colorCard';
import { ScreenList } from '../../constants/constants';
import { navigationToScreen } from '../../utils/utils';
import styles from './favourites.styles';

// create a component
const Favourites = (props) => {

    const [favs,setFavs] = useState([
        {id:1,name:'Bālakāṇḍa',color:"#FFAA19"},
        {id:2,name:'Ayodhyakāṇḍa',color:"#FF7A67"},
        {id:3,name:'Araṇyakāṇḍa',color:"#7876FF"},
        {id:4,name:'Kiṣkindakāṇḍa',color:"#7E2FED"},
        {id:5,name:'Sundarākāṇḍa',color:"#81B29A"},
        {id:6,name:'Yuddhakāṇḍa',color:"#457B9D"},
        {id:7,name:'Uttarakāṇḍa',color:"#F2A064"},
    ])



    return (
        <View style={styles.container}>
{
    favs.map((item,index)=>(
        <ColorCard title={item.name} number={"Sargas "+item.id}
        onPress={()=>{
            navigationToScreen(ScreenList.SHLOCK_INTRO, props, {
                headerColor: item.color,
                headerTitleColor: "#fff",
                title: item.name,
              });
        }}
        cardColor={item.color}/>
    ))
}    
    </View>
    );
};

//make this component available to the app
export default Favourites;
