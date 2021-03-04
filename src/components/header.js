import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Header() {
 return (
    <>
      <Image
            source= {require("../assets/banner.jpg")}
            style={styles.banner}
      />
    </>
  );
}

const styles = StyleSheet.create ({ 
        banner: {
        width: '100%',
        height: '40%',
    },
})