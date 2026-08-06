import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useState } from "react";

const Pin = (props) => {
  const { image, title } = props.pin;
  const [ratio, setRatio] = useState(1);

  return (
    <View style={styles.pin}>
      <View style={styles.imageContainer}> 
        <Image 
          source={{ uri: image }} 
          style={[styles.image, { aspectRatio: ratio }]}
          resizeMode="cover"
          onLoad={(e) => {
            const { width, height } = e.nativeEvent.source;
            if (width && height) {
              setRatio(width / height);
            }
          }}
        />

        <Pressable onPress={() => {}} style={styles.heartBtn}>
          <Entypo name="heart-outlined" size={16} color="black" />
        </Pressable>
      </View>
      {title ? (
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  pin: {
    width: "100%",
    padding: 4,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
  },
  title: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    marginVertical: 5,
    color: "#181818",
  },
  image: {
    width: "100%",
    borderRadius: 15,
    minHeight: 100,
  },
  heartBtn: {
    backgroundColor: '#D3CFD4',
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 6,
    borderRadius: 50,
  },
});

export default Pin;