import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Summary = () => {
    const [attendenceData, setAttendenceData] = useState([])
    const [currentDate, setCurrentDate] = useState(moment())
    const goToNextMonth = () => {
        const nextMonth = moment(currentDate).add(1, 'months')
        setCurrentDate(nextMonth)
    }
    const goToPrevMonth = () => {
        const prevMonth = moment(currentDate).subtract(1, 'months')
        setCurrentDate(prevMonth)
    }
    const formatDate = (date: any) => {
        return date.format('MMMM,YYYY')
    }
    const fetchAttendenceReport = async () => {
        try {
            const response = await axios.get('http://192.168.31.12:3001/attendence-report-all-employees', {
                params: {
                    month: 11, year: 2023
                }
            })
            setAttendenceData(response.data.report)
        } catch (error) {
            console.log(`Error fetching Attendence${error}`);
        }
    }
    useEffect(() => {
        fetchAttendenceReport()
    })
    console.log(attendenceData);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <Pressable>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 20,
                }}
            >
                <Ionicons onPress={goToPrevMonth} name='chevron-back-outline' size={25} color='black' />
                <Text style={{ fontWeight: 'bold', color: '#58B19F', marginHorizontal: 10 }}>
                    {formatDate(currentDate)}
                </Text>
                <Ionicons onPress={goToNextMonth} name='chevron-forward-outline' size={25} color='black' />
            </View>
        </Pressable>

        <View style={{ marginHorizontal: 12 }}>
            {attendenceData?.map((item, index) => (
                <View key={index} style={{ marginVertical: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 8,
                                padding: 10,
                                backgroundColor: "#4b6cb7",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text style={{ color: "white", fontSize: 16 }}>
                                {item?.name?.charAt(0)}
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                                {item?.name}
                            </Text>
                            <Text style={{ marginTop: 5, color: "gray" }}>
                                {item?.designation} ({item?.employeeId})
                            </Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    </ScrollView>
    )
}
export default Summary