import React, {useState} from 'react';
import {
  FlatList,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const Add = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.add}>Add</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  add: {
    fontSize: 25,
  },
});

export default Add;
