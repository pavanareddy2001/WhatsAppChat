import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const ChatListingCard = ({ profileName, onPressProfile, lastMessage, time }) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => {
        onPressProfile();
      }}
    >
      <Image
        style={styles.profileImg}
        source={require("../images/profileImg.png")}
      />
      <View style={{ flexDirection: "column", flex: 1,marginHorizontal: 12 }}>
        <Text numberOfLines={1} style={styles.profileNameStyle}>{profileName}</Text>
        <Text numberOfLines={1}  style={styles.lastMessage}>{lastMessage}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </TouchableOpacity>
  );
};

export default ChatListingCard;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    padding: 12,
    width: "100%",
    backgroundColor: "white",
    alignItems: 'flex-start',
    borderBottomWidth: 0.2,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderWidth: 1,
    backgroundColor: "black",
    borderRadius: 25,
  },
  profileNameStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    marginBottom: 8
  },
  lastMessage: {
    fontSize: 16,
    fontWeight: '400',
    color: 'gray'
  },
  time: {
    fontSize: 12,
    fontWeight: '400',
    color: 'gray'
  }
});
