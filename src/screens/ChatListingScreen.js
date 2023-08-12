import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import ChatListingCard from '../components/ChatListingCard'

const ChatListingScreen = (props) => {
    const chatList=[
        {
            id: 1,
            name: "Dev",
        },
        {
            id: 2, 
            name: "Meena",
        },
        {
            id: 3,
            name: "Maya",
        },
        {
            id: 4,
            name: "krish",
        },
    ]
  return (
    <View >
     <Header
     title={"Chat Listing Screen"}
     />
     {/* <View style={{height:"100%",backgroundColor:"#EEEEEE"}}>
        <Text>ddd</Text>
     </View> */}
     <FlatList
     data={chatList}
     renderItem={({item})=>{
        return(
            <ChatListingCard
            profileName={item.name}
            onPressProfile={()=>{
                props.navigation.navigate("ChatDetail")
            }}
            />
        )
     }}
     />
    </View>
  )
}

export default ChatListingScreen