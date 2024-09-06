import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import moment from 'moment'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';


const User = (props: any) => {
    const { name, id, salary, designation } = props.route.params
    const [currentDate, setCurrentDate] = useState(moment())
    const [attendednceStatus, setAttendanceStatus] = useState('present')
    const goToNextDay = () => {
        const nextDate = moment(currentDate).add(1, 'days')
        setCurrentDate(nextDate)
    }
    const goToPrevDay = () => {
        const prevDate = moment(currentDate).subtract(1, 'days')
        setCurrentDate(prevDate)
    }
    const formateDate = (date: any) => {
        return date.format('MMMM D,YYYY')
    }
    const submitAttendance = async () => {
        try {
          const attendanceData = {
            employeeId:id,
            employeeName:name,
            date: currentDate.format("MMMM D, YYYY"),
            status:attendednceStatus,
          };
          const response = await axios.post(
            "http://192.168.31.12:3001/postattendence",
            attendanceData
          );
    
          if (response.status === 200) {
            Alert.alert(`Attendance submitted successfully for ${name}`);
          }
        } catch (error) {
          console.log("error submitting attendance", error);
        }
      };
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '10',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginVertical: 20
                }}>
                <Ionicons onPress={goToPrevDay} name='chevron-back-outline' size={25} color='black' />
                <Text style={{ fontWeight: 'bold', color: '#58B19F' }}>{formateDate(currentDate)}</Text>
                <Ionicons onPress={goToNextDay} name='chevron-forward-outline' size={25} color='black' />
            </View>
            <Pressable style={{ marginVertical: 10, marginHorizontal: 12, flexDirection: 'row', gap: 10 }}>
                <View style={{
                    width: 50,
                    height: 50,
                    borderRadius: 8,
                    padding: 10,
                    backgroundColor: '#4b6cb7',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>
                        {name?.charAt(0)}
                    </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                        {name}
                    </Text>
                    <Text style={{ marginTop: 5, color: 'gray' }}>
                        {designation} {id}
                    </Text>
                </View>
            </Pressable>
            <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 12 }}>
                Basic Pay:{salary}
            </Text>
            <View>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: '500',
                        marginHorizontal: 12,
                        letterSpacing: 3,
                        marginTop: 7
                    }}
                >
                    ATTENDENCE
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, marginVertical: 10 }}>
                    <Pressable
                        onPress={() => setAttendanceStatus('present')}
                        style={{
                            backgroundColor: '#C4E0E5',
                            padding: 10,
                            borderRadius: 8,
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10,
                            flex: 1,
                        }}
                    >
                        {attendednceStatus === 'present' ? (
                            <FontAwesome5Icon name="dot-circle" size={24} color="black" />
                        ) : (
                            <Entypo name="circle" size={24} color="black" />
                        )}
                        <Text>Present</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => setAttendanceStatus('Absent')}
                        style={{
                            backgroundColor: '#C4E0E5',
                            padding: 10,
                            borderRadius: 8,
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10,
                            flex: 1,
                        }}
                    >
                        {attendednceStatus === 'Absent' ? (
                            <FontAwesome5Icon name="dot-circle" size={24} color="black" />
                        ) : (
                            <Entypo name="circle" size={24} color="black" />
                        )}
                        <Text>Absent</Text>
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, marginVertical: 10 }}>
                    <Pressable
                        onPress={() => setAttendanceStatus('halfday')}
                        style={{
                            backgroundColor: '#C4E0E5',
                            padding: 10,
                            borderRadius: 8,
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10,
                            flex: 1,
                        }}
                    >
                        {attendednceStatus === 'halfday' ? (
                            <FontAwesome5Icon name="dot-circle" size={24} color="black" />
                        ) : (
                            <Entypo name="circle" size={24} color="black" />
                        )}
                        <Text>Half Day</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => setAttendanceStatus('Holiday')}
                        style={{
                            backgroundColor: '#C4E0E5',
                            padding: 10,
                            borderRadius: 8,
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10,
                            flex: 1,
                        }}
                    >
                        {attendednceStatus === 'Holiday' ? (
                            <FontAwesome5Icon name="dot-circle" size={24} color="black" />
                        ) : (
                            <Entypo name="circle" size={24} color="black" />
                        )}
                        <Text>Holiday</Text>
                    </Pressable>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <TextInput
                        style={{
                            borderRadius: 6,
                            marginTop: 10,
                            borderWidth: 2,
                            borderColor: "#E0E0E0",
                            padding: 10,
                            flex: 1,
                        }}
                        placeholderTextColor="black"
                        placeholder="Advance / Loans"
                    />
                    <TextInput
                        style={{
                            borderRadius: 6,
                            marginTop: 10,
                            borderWidth: 2,
                            borderColor: "#E0E0E0",
                            padding: 10,
                            flex: 1,
                        }}
                        placeholderTextColor="black"
                        placeholder="Extra Bonus"
                    />
                </View>
             <Pressable
             onPress={()=>submitAttendance()}
              style={{
                  padding: 15,
                  backgroundColor: "#00c6ff",
                  width: 200,
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: 30,
                  borderRadius: 6,
             }}>
                <Text
                 style={{ textAlign: "center", color: "white", fontWeight: "500" }}
                >
                    Submit Attendence
                </Text>
             </Pressable>
            </View>
        </View>
    )
}

export default User

const styles = StyleSheet.create({})