import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DataTable } from 'react-native-paper';

const MarkAttendance = (props: any) => {
    const [currentDate, setCurrentDate] = useState(moment())
    const goToNextDay = () => {
        const nextDate = moment(currentDate).add(1, 'days')
        setCurrentDate(nextDate)
    }
    const goToPrevDay = () => {
        const prevDate = moment(currentDate).subtract(1, 'days')
        setCurrentDate(prevDate)
    }
    const formatDate = (date: any) => {
        return date.format('MMMM D, YYYY')
    }
    const fetchEmployee = async () => {
        try {
            const employeeData = await axios.get('http://192.168.31.12:3001/getEmployee');
            setEmployee(employeeData.data);
        } catch (error) {
            console.log(`Error while fetching the data ${error}`);
        }
    };
    const [employee, setEmployee] = useState([])
    useEffect(() => {
        fetchEmployee();
    }, [currentDate]);

    const [attendance, setAttendance] = useState([])
    const fetchAttendanceData = async () => {
        try {
            const response = await axios.get('http://192.168.31.12:3001/getattendence', {
                params: {
                    date: currentDate.format('MMMM D, YYYY')
                }
            });
            setAttendance(response.data);
        } catch (error) {
            console.log('Error fetching attendance data', error);
        }
    }

    useEffect(() => {
        fetchAttendanceData();
    }, [currentDate]);

    const employeeWithAttendance = employee.map((employee) => {
        const attendanceRecord = attendance.find(
            (record) => record.employeeId === employee.employeeId
        );
        return {
            ...employee,
            status: attendanceRecord ? attendanceRecord.status : ''
        };
    });
    console.log(employeeWithAttendance);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Pressable>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 20,
                    }}
                >
                    <Ionicons onPress={goToPrevDay} name='chevron-back-outline' size={25} color='black' />
                    <Text style={{ fontWeight: 'bold', color: '#58B19F', marginHorizontal: 10 }}>
                        {formatDate(currentDate)}
                    </Text>
                    <Ionicons onPress={goToNextDay} name='chevron-forward-outline' size={25} color='black' />
                </View>
            </Pressable>

            <View style={{ marginHorizontal: 12 }}>
                {employeeWithAttendance.map((item, index) => (
                    <Pressable
                        key={item.employeeId || index}
                        onPress={() => props.navigation.navigate('User', {
                            name: item.employeeName,
                            id: item.employeeId,
                            salary: item.salary,
                            designation: item.designation
                        })}
                        style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}
                    >
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 8,
                                padding: 10,
                                backgroundColor: '#1B9CFC',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Text>{item.employeeName.charAt(0)}</Text>
                        </View>
                        <View style={{ marginLeft: 10,flex:1 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.employeeName}</Text>
                            <Text style={{ marginTop: 5, color: 'grey' }}>
                                {item.designation} ({item.employeeId})
                            </Text>
                        </View>
                        <View style={{marginTop:15,margin:5,padding:5,backgroundColor:"#A1FFCE",borderRadius:5}}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>P</DataTable.Title>
                        <DataTable.Title>A</DataTable.Title>
                        <DataTable.Title>HD</DataTable.Title>
                        <DataTable.Title>H</DataTable.Title>
                        <DataTable.Title>NW</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell>{item?.present}</DataTable.Cell>
                        <DataTable.Cell>{item?.absent}</DataTable.Cell>
                        <DataTable.Cell>{item?.halfday}</DataTable.Cell>
                        <DataTable.Cell>1</DataTable.Cell>
                        <DataTable.Cell>8</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
                    </Pressable>
                ))}
            </View>
        </View>
    )
}

export default MarkAttendance;

const styles = StyleSheet.create({});
