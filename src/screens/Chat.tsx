import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import io from "socket.io-client";

const Chat = () => {
     const [message,setMessage]=useState("")
     const [messages,setMessages]=useState([])
     const socket=io("http://192.168.138.31:3000")
    useEffect(()=>{
       socket.on("chat message",msg=>{
           let newArr=[...messages]
           setMessages([newArr,msg])
       })
    })
  
    
const onSubmitMessages =()=>{
    socket.emit("chat message",message)
    setMessage("")
}

  return (
    <View>
      <TextInput
      value={message}
      onSubmitEditing={()=>onSubmitMessages()}
       autoComplete={false}
         onChangeText={(text)=>setMessage(text)}
          style={{height:50,borderWidth:3}}/>
          {messages.map(m=><Text key={m} >{m}</Text>)}
    </View>
  )
}

export default Chat