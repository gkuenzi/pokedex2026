import { Image } from 'expo-image';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { Button } from '@react-navigation/elements';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.parentContainer}>
      <Text style={styles.header}>Search For Your Pokemon</Text>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder='Type Something...'>
        </TextInput>
        <Pressable style={styles.searchBtn}>
          <Text style={styles.searchBtnText}>Search</Text>
        </Pressable>
      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  parentContainer: {

  },
  header: {
    color: "white",
    fontSize: 30,
    alignSelf: "center",
    padding: 10,
    fontWeight: "bold"
  },
  searchBar: {
    flexDirection: "row",
    padding: 10,
  },
  searchInput: {
    color: "white",
    width: 300,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 12,
    marginRight: 8,
  },
  searchBtn: {
    backgroundColor: "",
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: "green",
    padding: 10,
    borderRadius: 12,
  },
  searchBtnText: {
    color: "green"
  },
});
