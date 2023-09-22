import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import DetailsArea from './DetailsArea';

const SearchBar = () => {
    const [takeInput, settakeInput] = useState('')
    const [movieData, setMovieData] = useState({});
    const url = process.env.EXPO_PUBLIC_API_URL
    const ombdid = process.env.EXPO_PUBLIC_OMBDID_ID
    const apikey = process.env.EXPO_PUBLIC_API_KEY
    // const movieTitle=""
    const handleSearch = async (moviename) => {
        await fetch(`${url}?i=${ombdid}&apikey=${apikey}&t=${moviename}`, {
            method: 'GET'
          })
            .then((response) => response.json()) // Parse the response as JSON
            .then((data) => {
              // Check if the data is defined and contains the expected properties
              if (data && data.Poster) {
                // Update the state with the movie data
                setMovieData(data);
              } else {
                console.error('Invalid or missing data:', data);
                // Handle the case where the data is missing or invalid
                // You may want to set an error state or display an error message
              }
            })
            .catch((error) => {
              console.error('Error fetching movie data:', error);
              // Handle the error
            });
          
        
    }
    return (
        <View>

            <TextInput
                editable
                placeholder='Enter Movie Name'
                // numberOfLines={4}
                maxLength={40}
                onChangeText={takeInput => settakeInput(takeInput)}
                value={takeInput}
                style={{ padding: 10 }}
            />
            <Button title='Search' onPress={() => handleSearch(takeInput)}/>
            <DetailsArea movieData={movieData} />
        </View>
    )
}

export default SearchBar