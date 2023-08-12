import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Header = ({title,showBackIcon,showIcon=false}) => {
  return (
    <View
      style={styles.mainContainer}>
          {showBackIcon? <Image
          style={styles.iconStyle}
          source={require('../images/arrowBack.png')}
        />:null}
          <Image
          style={styles.profileImg}
          source={require('../images/profileImg.png')}
        />
      <Text style={{color: 'black', fontSize: 16,}}>{title}</Text>
     
     {showIcon? <Image
          style={[styles.iconStyle]}
          source={require('../images/icons.png')}
        />:null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer:{
    padding: 12,
    alignSelf: 'center',
    width: '100%',
    height:72,
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor: '#6D8DAD10',
    marginTop:14
  },
  profileImg: {
    width: 60,
    height: 60,
    borderWidth:1,
    backgroundColor:"black",
    borderRadius: 30,
  },
});
