import { View, Text,SafeAreaView,StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
import fake from "../server/fakeMessage.json";
import {FlatList} from 'react-native-bidirectional-infinite-scroll';
import {MessageBubble} from './MessageBubble';
import {queryMoreMessages} from '../utils/utils';
const Details = () => {
    const [messages, setMessages] = useState();
    useEffect(() => {
        // When app is opened, we are going to render 50 messages on screen.
        // Generally this is where you connect to chat server and query first batch of messages.
        const initChat = async () => {
          const initialMessages = await queryMoreMessages(50, 0);
          setMessages(initialMessages);
        };
    
        initChat();
      }, []);
      if (!messages) {
        // If the messages are not ready, lets not show anything.
        // Generally you can render some kind of loading indicator in this case.
        return null;
      }

const renderItem=({item})=>{
return(
    <View>
        <Text>{item.Fields.Title}</Text>
    </View>
)
}

return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chat between two users</Text>
      </View>
      <FlatList data={messages} inverted renderItem={MessageBubble} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    header: {
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomColor: '#BEBEBE',
      borderBottomWidth: 1,
    },
    headerTitle: {fontSize: 20, fontWeight: 'bold'},
    safeArea: {
      flex: 1,
    },
  });
export default Details;
