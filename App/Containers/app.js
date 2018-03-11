import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet,ScrollView,Image } from 'react-native'

import { connect } from 'react-redux'
import { fetchPeopleFromAPI } from '../actions'
import { Images } from '../Themes'
import styles from './Styles/LaunchScreenStyles'
import DrawerButton from '../Components/DrawerButton'
import FullButton from '../Components/FullButton'

const App = (props) => {

  const { people, isFetching } = props.people;
  return (
    <View style={styles.mainContainer}>
     <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
      <Text style={styles.titleText}>Load People1</Text>
      <FullButton text='Full Button' onPress={() => props.getPeople()}/>

      {
        isFetching && <Text>Loading</Text>
      }
      {
        people.length ? (
          people.map((person, i) => {
            return <View key={i}  style={styles.row}>
              <Text>Name: {person.name}</Text>
              <Text>Birth Year: {person.birth_year}</Text>
            </View>
          })
        ) : null
      }
    </View>
  )
}
function mapStateToProps (state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
