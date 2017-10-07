import { Dimensions } from 'react-native'

const EmSimulator = (value) => {

  const screenSize = () => {
    return Dimensions.get('window').width + Dimensions.get('window').height;
  }

  const ratioWidth = () => {
    return screenSize() / 1000;
  }

  let baseUnit = 10;

  const unit = () => {
    return baseUnit * ratioWidth();
  }

  const em = (value) => {
    return unit() * value
  }

  return em(value);
}

export default EmSimulator;
