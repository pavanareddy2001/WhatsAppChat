import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../components/Header";

const ChatDetail = () => {
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
      message: "The meeting was suppose to end on time but. ",
      time: "9:40AM",
      messageType: "to",
    },
    {
      id: 5,
      message: "Yeah I know Sorry :(",
      time: "9:30AM",
      messageType: "from",
    },
    {
      id: 6,
      message: "But I dont know about timing :(",
      time: "9:40AM",
      messageType: "from",
    },
    {
      id: 7,
      message:
        "Did you talk to Peter about yesterday?  The meeting was not good and Shreya saying something in between.",
      time: "9:41AM",
      messageType: "to",
    },
    {
      id: 8,
      message: "The meeting was suppose to end on time but. ",
      time: "9:40AM",
      messageType: "to",
    },
    {
      id: 9,
      message: "Sure! Yes",
      time: "9:30AM",
      messageType: "from",
    },
    {
      id: 10,
      message: "But I dont know about timing :(",
      time: "9:40AM",
      messageType: "from",
    },
    {
      id: 11,
      message:
        "Did you talk to Peter about yesterday?  The meeting was not good and Shreya saying something in between.",
      time: "9:41AM",
      messageType: "to",
    },
    {
      id: 12,
      message: "The meeting was suppose to end on time but. ",
      time: "9:40AM",
      messageType: "to",
    },
    {
      id: 13,
      message: "Sure! Yes",
      time: "9:30AM",
      messageType: "from",
    },
    {
      id: 14,
      message: "But I dont know about timing :(",
      time: "9:40AM",
      messageType: "from",
    },
    {
      id: 15,
      message:
        "Did you talk to Peter about yesterday?  The meeting was not good and Shreya saying something in between.",
      time: "9:41AM",
      messageType: "to",
    },
    {
      id: 16,
      message: "The meeting was suppose to end on time but. ",
      time: "9:40AM",
      messageType: "to",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <Header title={"Chat Detail"} showBackIcon={true} showIcon={true} />
      <FlatList
        data={data}
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
                  },
                ]}
              >
                <Text>{item.message}</Text>
                <Text>{item.time}</Text>
              </View>
            </View>
          );
        }}
      />
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 25,
          width: "80%",
          marginVertical: 10,
          paddingHorizontal:5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image source={require("../images/emoji.png")} />
        <TextInput 
        placeholder="Message" 
       style={{flex:1}}
        />
        <Image
         source={require("../images/attachment.png")} />
      </View>
      <TouchableOpacity style={{marginRight:5}}>
      <Image
         source={require("../images/send.png")} />
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
    padding: 5,
    margin: 5,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: "white",
  },
});
