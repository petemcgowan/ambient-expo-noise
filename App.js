import React, {Fragment} from 'react';
import { StyleSheet, View } from 'react-native';
import MusicPlayer from './component/MusicPlayer';

export default function App() {
  return (
    <View style={styles.container}>
      <MusicPlayer />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
