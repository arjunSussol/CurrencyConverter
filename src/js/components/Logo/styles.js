import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  $largeImageSize: imageWidth / 2,
  $largeContainerSize: imageWidth,

  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth / 2,
  },
  logo: {
    width: imageWidth / 2,
  },
  text: {
    color: '$white',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: '600',
  },
});
