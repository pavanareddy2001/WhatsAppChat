import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import ChatListingCard from '../components/ChatListingCard'

const ChatListingScreen = (props) => {
    const chatList=[
        {
            id: 1,
            name: "Dev",
            lastmessage:"Hello,how r u?"
        },
        {
            id: 2, 
            name: "Meena",
            lastmessage:"Hello,how r u?"
        },
        {
            id: 3,
            name: "Maya",
            lastmessage:"Hello,how r u?"
        },
        {
            id: 4,
            name: "krish",
            lastmessage:"Hello,how r u?"
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
            lastMessage={item.lastmessage}
            />
        )
     }}
     />
    </View>
  )
}

export default ChatListingScreen