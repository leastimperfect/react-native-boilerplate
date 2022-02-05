import {Image} from 'react-native';

export default function AppLogo( props: { style?: Array<any> | {} } ) {
  const imageProps = {...props}
  const resizeModeStyle = { resizeMode: 'contain' };

  if (  props.style ) {
    imageProps.style = Array.isArray( props.style ) ? [resizeModeStyle, ...props.style] : [resizeModeStyle, props.style];
  }

  return (
    <Image source={require( '../assets/images/logo.png' )} {...imageProps}>
    </Image>
  );
}
