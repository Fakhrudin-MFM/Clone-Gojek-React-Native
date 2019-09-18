/* eslint-disable global-require */
import React from 'react';
import { View, TextInput, Image } from 'react-native';

const SearchFeature = () => {
  return (
    <View style={{ marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 }}>
      <View style={{ position: 'relative', flex: 1 }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 25,
            height: 40,
            fontSize: 13,
            paddingLeft: 45,
            paddingRight: 20,
            backgroundColor: 'white',
          }}
          placeholder="What do you want to eat"
        />
        <Image
          source={require('./icon/search.png')}
          style={{ position: 'absolute', top: 5, left: 12 }}
        />
      </View>
      <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./icon/promo.png')} />
      </View>
    </View>
  );
};

export default SearchFeature;