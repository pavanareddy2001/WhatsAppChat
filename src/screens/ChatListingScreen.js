import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ChatListingCard from "../components/ChatListingCard";

function HomeOptions({ title, selected, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: selected ? 3 : 0,
        borderBottomColor: "white",
        width: "33%",
      }}
    >
      <Text
        style={styles.headerTitle}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const ChatListingScreen = (props) => {
  const chatList = [
    {
      id: 1,
      name: "Anna",
      lastmessage: "Yeah I know Sorry :(",
      time: "Yesterday",
    },
    {
      id: 2,
      name: "Meena",
      lastmessage: "Who would’ve thought that we co...",
      time: "Yesterday",
    },
    {
      id: 3,
      name: "Maya",
      lastmessage: "I mailed you the file Veronica s...",
      time: "Yesterday",
    },

    {
      id: 4,
      name: "krish",
      lastmessage: "Help me get strawberry jam from ...",
      time: "Yesterday",
    },
  ];
  const options = {
    CHATS: "Chats",
    STATUS: "Status",
    CALLS: "Calls",
  };
  const [selected, setSelected] = useState(options.CHATS);
  return (
    <View style={{ flex: 1 }}>

      <View style={styles.headerView}>
        <Text style={styles.headerStyle}>Whatsapp</Text>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.searchImg}
            source={require("../images/search.png")}
          />
          <Image
            style={styles.sideIcon}
            source={require("../images/sideIcon.png")}
          />
        </View>
      </View>
      <View
        style={styles.homeOptions}
      >
        <HomeOptions
          selected={selected === options.CHATS}
          title={options.CHATS}
          onPress={() => {
            setSelected(options.CHATS);
          }}
        />
        <HomeOptions
          selected={selected === options.STATUS}
          title={options.STATUS}
          onPress={() => {
            setSelected(options.STATUS);
          }}
        />
        <HomeOptions
          selected={selected === options.CALLS}
          title={options.CALLS}
          onPress={() => {
            setSelected(options.CALLS);
          }}
        />
      </View>
      {selected === options.CALLS ? (
        <Text style={styles.notAvailable}>No Calls Available</Text>
      ) : null}
      {selected === options.STATUS ? (
        <Text style={styles.notAvailable}>No Status Available</Text>
      ) : null}
      {selected === options.CHATS ? (
        <FlatList
          contentContainerStyle={{ flex: 1 }}
          data={chatList}
          renderItem={({ item }) => {
            return (
              <ChatListingCard
                profileName={item.name}
                onPressProfile={() => {
                  props.navigation.navigate("ChatDetail", item.name);
                }}
                lastMessage={item.lastmessage}
                time={item.time}
              />
            );
          }}
        />
      ) : null}
    </View>
  );
};

export default ChatListingScreen;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    backgroundColor: "#128C7E",
    padding: 16,
    justifyContent: "space-between",
  },
  headerStyle: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  mainContainer: {
    alignSelf: "flex-start",
  },
  notAvailable: {
    fontSize: 16,
    width: "100%",
    textAlign: "center",
    marginVertical: 40,
  },
  messageContainer: {
    padding: 5,
    margin: 5,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: "white",
    maxWidth: "70%",
  },
  headerTitle:{
    fontSize: 14,
    fontWeight: "800",
    textTransform: "uppercase",
    color: "white",
  },
  searchImg:{ 
    marginRight: 16, 
    height: 20, 
    width: 20 
  },
  sideIcon:{ 
    marginRight: 16, 
    height: 20, 
    width: 20 
  },
  homeOptions:{
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#128C7E",
    paddingBottom: 1,
  }

  
});
