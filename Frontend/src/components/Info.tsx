import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Info = ({ children, style }) => {
  return (
    <View style={[{ marginTop: 20, flexDirection: 'row', alignItems: 'center', gap: 20 }, style]}>
      <Pressable style={{
        backgroundColor: '#D3CCE3',
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
      }}>
        <View style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10,
        }}>
          <Ionicons name='people-outline' size={24} color='black' />
        </View>
        {children}
      </Pressable>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});
