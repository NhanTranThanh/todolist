import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class MovieItem extends React.PureComponent {
  render() {
    const {data} = this.props;
    if (!data) return;

    const {poster_path, title} = data;
    return (
      <View style={styles.movieItemWrap}>
        <Image
          style={styles.thumbnailImg}
          resizeMode="contain"
          source={{uri: `https://image.tmdb.org/t/p/w500/${poster_path}`}}
        />
        <Text>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movieItemWrap: {
    height: 130,
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
  },
  thumbnailImg: {
    height: 80,
    width: 50,
  },
});
