import { StyleSheet, ScrollView, View } from 'react-native';

import Pin from '@/components/Pin';
import pins from '@/assets/data/pins';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={styles.container}>
        <View style={styles.column}>
          {pins
            .filter((item, index) => index % 2 === 0)
            .map((pin) => (
              <Pin pin={pin} key={pin.id} />
            ))}
        </View>

        <View style={styles.column}>
          {pins
            .filter((item, index) => index % 2 === 1)
            .map((pin) => (
              <Pin pin={pin} key={pin.id} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
});
