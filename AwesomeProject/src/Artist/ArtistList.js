/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';

import ArtistBox from './ArtistBox'



export default class ArtistList extends Component<{}> {

  constructor(props){
  	super(props);
  	this.state = {};

  }

  render() {



    return (

      <FlatList
         data={Array(500).fill(this.props.artist)}
         renderItem={({item}) =><ArtistBox artist={this.props.artist} />}
      />
    );
  }
}
