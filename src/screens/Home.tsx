import { View, Text,TouchableOpacity,Image, StyleSheet, FlatList, TextInput} from 'react-native';
import React from 'react';
import { MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";
import Line from '../components/Line/Line';
import fakeApi from "../server/fakeApi.json"

const Home = ({navigation}) => {
    
const renderItem=({item})=>{
  return(
      <View key={item.postid}>
          <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Details")}>
<Image
source={{uri:item.imagelink}}
name='person'
size={30}
color="dodgerblue"
style={styles.image}
/>
<Text>کانال نمونه </Text>
</TouchableOpacity>
<Line height={2}  width={"100%"} bg="#fff" style={{marginTop:15}} />
      </View>
  )
}


  return (
    <View style={styles.container}>
        <View style={styles.search}>
            <TextInput
            style={styles.textinput}
            placeholder="search"
            />
             <Ionicons
            name="search"
            style={styles.icon}
            />
        </View>
    <FlatList 
    data={fakeApi.data.posts}
    renderItem={renderItem}
    />
    
    </View>
  );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column"
    },
    btn:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:15,
        padding:10,
    },
    image:{
        width:45,
        height:45,
        marginRight:25,
        borderRadius:25
    },
    search:{
        width:"92%",
        height:60,
        backgroundColor:"#fff",
        alignSelf:"center",
        marginTop:25,
        borderRadius:28,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between"
    },
    textinput:{
        marginLeft:20,
        width:"80%",
        fontSize:18
    },
    icon:{
        marginRight:15,
        fontSize:25
    }

})

export default Home;




