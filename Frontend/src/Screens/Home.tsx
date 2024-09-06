import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MarkAttendence from './MarkAttendence';
import Summary from './Summary';
const Home = (props: any) => {
  return (
    <ScrollView>
      <LinearGradient colors={['#7F7FD5', '#E9E4F0']} style={{ flex: 1, marginTop: 5 }}>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Feather name='bar-chart' size={24} color='black' />
            <Text style={{ fontSize: 16, fontWeight: '600' }}>Employee Management System</Text>
            <Entypo name="lock" size={30} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', gap: 20 }}>
          {/* Empty View */}
        </View>

        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', gap: 20 }}>
          <Pressable
            onPress={() => props.navigation.navigate('Employee')}
            style={{
              backgroundColor: "#D3CCE3",
              padding: 12,
              borderRadius: 6,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome5 name="user-friends" size={24} color={'black'} />
            </View>
            <Text style={{ marginTop: 7, fontWeight: "600" }}>
              Employee List
            </Text>
          </Pressable>
          <Pressable
            onPress={()=>props.navigation.navigate('MarkAttendence')}
            style={{
              backgroundColor: "#D3CCE3",
              padding: 12,
              borderRadius: 6,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Fontisto name="check" size={24} color={'black'} />
            </View>
            <Text style={{ marginTop: 7, fontWeight: "600" }}>
              Mark Attendance
            </Text>
          </Pressable>
        </View>

        <View style={{
          marginTop: 20,
          backgroundColor: "white",
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 7,
        }}>
          <Pressable
            style={{
              backgroundColor: "#BE93C5",
              borderRadius: 6,
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <View
              style={{
                padding: 7,
                width: 45,
                height: 45,
                borderRadius: 7,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <FontAwesome5 name="clipboard-list" size={25} color='black' />
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,
                fontWeight: "600",
                flex: 1,
              }}
            >
              Attendance Report
            </Text>
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 7,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo name="chevron-right" size={24} color="black" />
            </View>
          </Pressable>

          <Pressable
          onPress={()=>props.navigation.navigate(Summary)}
            style={{
              backgroundColor: "#BE93C5",
              borderRadius: 6,
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <View
              style={{
                padding: 7,
                width: 45,
                height: 45,
                borderRadius: 7,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Fontisto name="pie-chart" size={25} color='black' />
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,
                fontWeight: "600",
                flex: 1,
              }}
            >
              Summary Report
            </Text>
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 7,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo name="chevron-right" size={24} color="black" />
            </View>
          </Pressable>

          <Pressable
            style={{
              backgroundColor: "#BE93C5",
              borderRadius: 6,
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <View
              style={{
                padding: 7,
                width: 45,
                height: 45,
                borderRadius: 7,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <FontAwesome5 name="file-alt" size={25} color='black' />
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,
                fontWeight: "600",
                flex: 1,
              }}
            >
              All Generate Reports
            </Text>
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 7,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo name="chevron-right" size={24} color="black" />
            </View>
          </Pressable>

          <Pressable
            style={{
              backgroundColor: "#BE93C5",
              borderRadius: 6,
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <View
              style={{
                padding: 7,
                width: 45,
                height: 45,
                borderRadius: 7,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <FontAwesome5 name="user-clock" size={25} color='black' />
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,
                fontWeight: "600",
                flex: 1,
              }}
            >
              Overtime Employees
            </Text>
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 7,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo name="chevron-right" size={24} color="black" />
            </View>
          </Pressable>
        </View>

        <View style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}>
          <View
            style={{
              backgroundColor: "#f79d00",
              borderRadius: 6,
              padding: 12,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 7,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome5 name="calendar-check" size={24} color="black" />
            </View>
            <Text style={{ marginTop: 7, fontWeight: "600" }}>
              Attendance Criteria
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#f79d00",
              borderRadius: 6,
              padding: 12,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 7,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="trending-up" size={24} color="black" />
            </View>
            <Text style={{ marginTop: 7, fontWeight: "600" }}>
              Increased Workflow
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#f79d00",
              borderRadius: 6,
              padding: 12,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 7,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome5 name="coins" size={24} color="black" />
            </View>
            <Text style={{ marginTop: 7, fontWeight: "600" }}>
              Cost Saving
            </Text>
          </View>
        </View>

        <View style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        }}>
          <Pressable
            style={{
              backgroundColor: "#D3CCE3",
              padding: 12,
              borderRadius: 6,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="activity" size={24} color={'black'} />
            </View>
            <Text style={{ marginTop: 7, fontWeight: "600" }}>
              Employee Performance
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Home;
