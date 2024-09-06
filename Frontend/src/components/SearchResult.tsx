import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchResult = ({data,input,setInput}) => {
  return (
    <View style={{padding:10}}>
     <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          // Check if the employeeName matches the search input
          if (item.employeeName.toLowerCase().includes(input.toLowerCase())) {
            return (
             <View 
             style={{marginVertical:10,gap:10,flexDirection:'row'}}
             >
                <View 
                style={{
                    width:50,height:50,
                    borderRadius:8,padding:10,
                    backgroundColor:'#1B9CFC',alignItems:'center',justifyContent:'center'
                }}>
                    <Text>{item.employeeName?.charAt(0)}</Text>
                </View>
                <View>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>{item.employeeName}</Text>
                    <Text style={{marginTop:5,color:'grey'}}>{item?.designation}({item.employeeId})</Text>
                </View>
             </View>
            );
          }
          // If no match, return null or an empty component
          return null;
        }}
      />
    </View>
  )
}

export default SearchResult

const styles = StyleSheet.create({})