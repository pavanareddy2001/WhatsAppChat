import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({ title, lastSeen , onBackpress}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onBackpress}>
        <Image
          style={styles.iconStyle}
          source={require("../images/arrowBack.png")}
        />
      </TouchableOpacity>
      <Image
        style={styles.profileImg}
        source={require("../images/profileImg.png")}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.lastSeen}>{lastSeen}</Text>
      </View>
      <Image source={require("../images/icons.png")} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 12,
    alignSelf: "center",
    width: "100%",
    height: 72,
    flexDirection: "row",
    backgroundColor: "#6D8DAD10",
    alignItems: "center",
    backgroundColor: "white",
  },
  profileImg: {
    width: 48,
    height: 48,
    marginHorizontal: 10,
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  headerTitle:{ 
    color: "black", 
    fontSize: 16, 
    fontWeight: '700' , 
    marginBottom: 5
  },
  lastSeen:{ 
    color: "gray", 
    fontSize: 12, 
    fontWeight: '400' 
  },
});
