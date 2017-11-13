/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';


import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox'



export default class ArtistList extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      liked: false,      
    };

  }

  handlePress(artist) {
    Actions.artistDetail({ artist })
  }

  render() {
    const likeIcon = this.state.liked ?
    <Icon name="ios-heart" size={30} color="#e74c3c" /> :
    <Icon name="ios-heart-outline" size={30} color="gray" />
      
    
    return (
      <FlatList
        data={this.props.artist}
        renderItem={({item, index}) => {
          return <TouchableOpacity onPress={() => this.handlePress(item)}>
            <ArtistBox artist={item} />
          </TouchableOpacity>
        }}
        keyExtractor={(item => item.name)}
      />
    );
  }
}
