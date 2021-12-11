import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native'

const windowsWidth = Dimensions.get('window').width
const windowsHeight = Dimensions.get('window').height
const SingleNews = ({ item, index }) => {
  return (
    <View
      style={{
        height: windowsHeight,
        width: windowsWidth,
        transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: '45%', resizeMode: 'cover', width: windowsWidth }}
      />
      <View style={{ ...styles.description, backgroundColor: '#282C35' }}>
        <Text style={{ ...styles.title, color: 'white' }}>{item.title}</Text>
        <Text style={{ ...styles.content, color: 'white' }}>
          {item.description}
        </Text>
        <Text style={{ color: 'white' }}>
          Short by <Text>{item.author ?? 'unknown'}</Text>
        </Text>
        <ImageBackground
          blurRadius={30}
          style={styles.footer}
          source={{ uri: item.urlToImage }}
        >
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <Text style={{ fontSize: 15, color: 'white' }}>
              '{item?.content?.slice(0, 45)}...'
            </Text>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>
              Read More
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  content: {
    fontSize: 18,
    paddingBottom: 10,
  },
  footer: {
    height: 80,
    width: windowsWidth,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#d7be69',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  description: {
    padding: 15,
    flex: 1,
  },
})

export default SingleNews