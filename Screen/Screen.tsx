import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

type SecondScreenProps = StackScreenProps<RootStackParamList, 'Second'>;

export default function SecondScreen({ navigation }: SecondScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: 28,  }]}>
        Second Screen
      </Text>
      <Button
        textColor="black"
        onPress={() => navigation.goBack()}
      >
        Go Back
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});