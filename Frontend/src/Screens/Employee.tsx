import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AddDetails from './AddDetails';
import SearchResult from '../components/SearchResult';

const Employee = (props: any) => {
  const [employee, setEmployee] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const employeeData = await axios.get('http://192.168.31.12:3001/getEmployee');
        setEmployee(employeeData.data);
      } catch (error) {
        console.log(`Error while fetching the data ${error}`);
      }
    };
    fetchEmployee();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            marginHorizontal: 10,
            backgroundColor: '#9AECDB',
            borderRadius: 3,
            height: 40,
            paddingHorizontal: 10,
          }}
        >
          <AntDesign
            name="search1"
            size={20}
            color="black"
            style={{ marginRight: 5 }}
          />
          <TextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            style={{ flex: 1 }}
            placeholder="Search"
          />
        </View>
        <Pressable
          style={{ marginLeft: 10 }}
          onPress={() => props.navigation.navigate(AddDetails)}
        >
          <Ionicons name="add-circle-outline" size={30} color="#0072b1" />
        </Pressable>
      </View>

      {employee.length > 0 ? (
        <SearchResult data={employee} input={input} setInput={setInput} />
      ) : (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>No Data</Text>
          <Text>Press on the plus button and add your Employee</Text>
          
        </View>
      )}
    </View>
  );
};

export default Employee;

const styles = StyleSheet.create({});
