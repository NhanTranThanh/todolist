import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import MovieItem from './components/MovieItem';

export default class Movies extends React.PureComponent {
  state = {
    popularVideos: [],
    topVideos: [],
  };

  componentDidMount() {
    const {popularVideos, topVideos} = this.state;
    if (!(popularVideos && popularVideos.length)) {
      fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=16e3cfa3a6537aef4b9cb4ca4e939e2a',
        {
          'Content-Type': 'application/json',
        },
      )
        .then(resp => {
          return resp.json();
        })
        .then(json => {
          this.setState({
            popularVideos: json.results,
          });
        })
        .catch(error => console.log('error: ', error));
    }
    if (!(topVideos && topVideos.length)) {
      fetch(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=16e3cfa3a6537aef4b9cb4ca4e939e2a',
        {
          'Content-Type': 'application/json',
        },
      )
        .then(resp => {
          return resp.json();
        })
        .then(json => {
          this.setState({
            topVideos: json.results,
          });
        })
        .catch(error => console.log('error: ', error));
    }
  }

  render() {
    const {popularVideos, topVideos} = this.state;
    return (
      <View style={styles.movieList}>
        <View style={styles.flex05}>
          <Text style={styles.title}>Popular Movies</Text>
          <ScrollView>
            <View>
              {(popularVideos || []).map(item => {
                return <MovieItem key={item.id} data={item} />;
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.flex05}>
          <Text style={styles.title}>Top Movies</Text>
          <ScrollView>
            <View>
              {(topVideos || []).map(item => {
                return <MovieItem key={item.id} data={item} />;
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movieList: {
    flex: 1,
  },
  title: {
    marginVertical: 20,
  },
  flex05: {
    flex: 0.5,
    height: '50%',
  },
});
