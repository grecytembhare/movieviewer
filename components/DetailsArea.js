import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailsArea = ({ movieData }) => {
  if (!movieData || Object.keys(movieData).length === 0) {
    // If movieData is undefined or an empty object, display a loading indicator or an error message
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: movieData.Poster || '' }} 
        style={styles.poster}
      />
      
      
      <Text style={styles.title}>{movieData.Title || 'No Title'}</Text> {/* Provide a default value */}
      <Text style={styles.releaseDate}>{movieData.Released || 'No Release Date'}</Text> {/* Provide a default value */}
      <Text textWrap="wrap" style={styles.plot}>{movieData.Plot || 'No Plot Available'}</Text> {/* Provide a default value */}
      <Text style={styles.plot}>{movieData.Country || 'No Country Available'}</Text> 
      <Text style={styles.plot}>{movieData.Language || 'No Language Available'}</Text> 
      <Text style={styles.title}>{movieData.Genre || 'No Genre'}</Text>
      <Text style={styles.title}>{movieData.Runtime || 'No Runtime'}</Text>
      <Text textWrap="wrap" style={styles.title}>{movieData.Director || 'No Director'}</Text>
      <Text textWrap="wrap" style={styles.title}>{movieData.Writer || 'No Writer'}</Text>
      <Text textWrap="wrap" style={styles.title}>{movieData.Actors || 'No Actors'}</Text>

     
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  poster: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    wordW:' break-word',
    marginTop: 10,
    textAlign: "center",
  },
  releaseDate: {
    fontSize: 16,
    marginTop: 5,
  },
  plot: {
    fontSize: 16,
    marginTop: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});

export default DetailsArea;