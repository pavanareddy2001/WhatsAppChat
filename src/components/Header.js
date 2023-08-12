import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Header = ({ title,lastSeen}) => {
  return (
    <View style={styles.mainContainer}>
      {/* <View style={{justifyContent:"space-between"}}> */}
      <Image
        style={styles.iconStyle}
        source={require("../images/arrowBack.png")}
      />
      <Image
        style={styles.profileImg}
        source={require("../images/profileImg.png")}
      />
      {/* </View> */}
      <Text style={{ color: "black", fontSize: 16 }}>{title}</Text>
<Text>{lastSeen}</Text>
      <Image
        
        source={require("../images/icons.png")}
      />
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
    justifyContent: "space-between",
    backgroundColor: "#6D8DAD10",
    alignItems:"center"
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  iconStyle:{
    width: 24,
    height: 24,
  }
});
