import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const TextSection = ({ section, text, showInOneLine }) => {
  return (
    <View>
      {showInOneLine ? (
        <Text>
          <Text style={styles.boldText}>{section}:</Text> {text}
        </Text>
      ) : (
        <>
          <Text style={styles.boldText}>{section}:</Text>
          <Text>{text}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
  },
});
