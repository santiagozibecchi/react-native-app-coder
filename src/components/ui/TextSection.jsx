import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export const TextSection = ({ section, text, showInOneLine }) => {

  const { colors } = useSelector((state) => state.theme.value);

  return (
    <View style={styles.sectionContainer}>
      {showInOneLine ? (
        <Text>
          <Text style={[styles.boldText, { color: colors.text }]}>{section}:</Text> <Text style={{ color: colors.text }}>{text}</Text>
        </Text>
      ) : (
        <>
          <Text style={[styles.boldText, { color: colors.text }]}>{section}:</Text>
          <Text style={{ color: colors.text }}>{text}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
  },
  sectionContainer: {
    gap: 5,
    marginTop: 2
  }
});
