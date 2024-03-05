//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP } from '../../utils/utils';


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:widthPercentageToDP('4%'),
        // backgroundColor:'white'
    },
});

//make this component available to the app
export default styles;
