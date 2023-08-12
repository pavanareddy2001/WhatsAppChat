import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../components/Header";

const ChatDetail = (props) => {
  let data = [
    {
      id: 1,
      message: "Sure! Yes",
      time: "9:30AM",
      messageType: "from",
    },
    {
      id: 2,
      message: "But I dont know about timing :(",
      time: "9:40AM",
      messageType: "from",
    },
    {
      id: 3,
      message:
        "Did you talk to Peter about yesterday?  The meeting was not good and Shreya saying something in between.",
      time: "9:41AM",
      messageType: "to",
    },
  
    {
      id: 4,
      message: "The meeting was suppose to end on time but. 😅😂 ",
      time: "9:40AM",
      messageType: "to",
    },
    {
      id: 5,
      message: "Yeah I know Sorry :(",
      time: "9:30AM",
      messageType: "from",
    },
 
  ];
  return (
    <View style={{ flex: 1 }}>
    
        <Header
          onBackpress={() => props.navigation.goBack()}
          lastSeen={"Last seen 12:40 AM"}
          title={props.route.params}
          showBackIcon={true}
          showIcon={true}
        />
        <FlatList
          data={data}
          keyboardShouldPersistTaps={'handled'}
          renderItem={({ item }) => {
            return (
              <View
                style={[
                  styles.mainContainer,
                  {
                    alignSelf:
                      item.messageType == "to" ? " flex-start" : "flex-end",
                  },
                ]}
              >
                <View
                  style={[
                    styles.messageContainer,
                    {
                      backgroundColor:
                        item.messageType == "to" ? "white" : "#E4FFDF",
                      borderTopLeftRadius: item.messageType == "to" ? 0 : 16,
                      borderTopRightRadius: item.messageType == "to" ? 16 : 0,
                    },
                  ]}
                >
                  <Text style={{ color: "black" }}>{item.message}</Text>
                  <Text
                    style={{ width: "100%", textAlign: "right", fontSize: 12 }}
                  >
                    {item.time}
                  </Text>
                </View>
              </View>
            );
          }}
        />
        <View
          style={styles.footermainView}
        >
          <View
            style={styles.textInputView}
          >
            <Image source={require("../images/emoji.png")} />
            <TextInput placeholder="Message" style={{ flex: 1 }} />
            <Image source={require("../images/attachment.png")} />
          </View>
          <TouchableOpacity style={{ marginRight: 5 }}>
            <Image source={require("../images/send.png")} />
          </TouchableOpacity>
        </View>
     
    </View>
  );
};

export default ChatDetail;

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: "flex-start",
  },
  messageContainer: {
    padding: 12,
    margin: 5,
    borderRadius: 16,
    backgroundColor: "white",
    maxWidth: "70%",
  },
  footermainView:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInputView:{
    borderRadius: 25,
    width: "85%",
    marginVertical: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  }
});
