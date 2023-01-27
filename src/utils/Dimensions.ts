import { Dimensions, StatusBar } from 'react-native'

const phoneHeight = Dimensions.get('screen').height + StatusBar.currentHeight

export default phoneHeight
