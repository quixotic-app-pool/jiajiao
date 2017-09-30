/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { PureComponent } from 'react'
import { View } from 'react-native'


import { NavigationItem } from '../../widget'

import UserComment from './Comment'

export default class UserCommentScene extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
      headerTitle: '用户评论',
      headerStyle: { backgroundColor: 'white' },
      headerRight: (
          <NavigationItem
              icon={require('../../img/Public/icon_navigationItem_share@2x.png')}
              onPress={() => {

              }}
          />
      ),
    });


  render(){
    return (
      <View style={{flex: 1}}>
        <UserComment />
      </View>
    )

  }

}
