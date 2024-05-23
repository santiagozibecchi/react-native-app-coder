import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import * as Icon from '../icons/Icons';
import { Ionicons } from "@expo/vector-icons"

export const TextSection = ({ section, text, showInOneLine }) => {
  const { colors } = useSelector((state) => state.theme.value);

  const determineStarCount = (score) => {
    const scoreNumber = Number(score);
    const fullStars = Math.floor(scoreNumber);
    const hasHalfStar = (scoreNumber - fullStars) >= 0.5; // 4,8 - 4 (0,8) >= 0,5 => true 

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Icon.Favourite
          key={i}
          size={18}
          color={colors.primary}
          outline
          style={{ top: 2 }}
        />
      );
    }

    if (hasHalfStar) {
      const randomKey = Math.random()*5
      stars.push(<Ionicons key={randomKey} name="star-half-outline" size={18} color={colors.primary} style={{ top: 2 }} />);
    }

    return stars;
  };

  return (
    <View style={styles.sectionContainer}>
      {showInOneLine ? (
        <View style={styles.textContainer}>
          <Text>
            <Text style={[styles.boldText, { color: colors.text }]}>{section}:</Text> <Text style={{ color: colors.text }}>{text}</Text>
            {section === 'Rating' && (
              <View style={styles.favIcons}>
                {determineStarCount(text)}
              </View>
            )}
          </Text>
        </View>
      ) : (
        <>
          <Text style={[styles.boldText, { color: colors.text }]}>{section}:</Text>
          <Text style={{ color: colors.text }}>{text}</Text>
          {section === 'Rating' && (
            <View style={styles.favIcons}>
              { determineStarCount(text) }
            </View>
          )}
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
  },
  textContainer: {
    display: "flex",
  },
  favIcons: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginTop: 5,
    marginLeft: 5,
    paddingLeft: 5,
  },
});
