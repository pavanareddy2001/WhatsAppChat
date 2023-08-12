import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'

const ChatListingCard = ({profileName,onPressProfile}) => {
  return (
    <View >
        <TouchableOpacity style={styles.mainContainer}
        onPress={()=>{
            onPressProfile()
        }}
        >
        <Image
          style={styles.profileImg}
          source={require('../images/loading.png')}
        />
      <Text style={styles.profileNameStyle}>{profileName}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChatListingCard

const styles = StyleSheet.create({
    mainContainer:{
       // flex:1,
        flexDirection:"row",
        padding: 12,
        alignItems: 'center',
        width: '100%',
        height:72,
        backgroundColor: 'grey',
        borderWidth:1,
      },
    profileImg: {
        width: 50,
        height: 50,
        borderWidth:1,
        backgroundColor:"black",
        borderRadius:25,
      },
      profileNameStyle:{
        fontSize:16,
        margin:10
      }
})