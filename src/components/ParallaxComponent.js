var React    = require('react');
import ParallaxImage from 'react-image-parallax2';


  
export default class parallax extends React.Component {
    render(){
      return (
          <span>
            <ParallaxImage src={('../assets/main.JPG')} reduceHeight={0.60}>
            
            </ParallaxImage>


    
        <ParallaxImage 
            src={('../assets/katiebeach.jpg')}
            reduceHeight={0.65}>
        </ParallaxImage>

        <ParallaxImage 
            src={('../assets/Sample.jpg')}
            reduceHeight={0.30}>
        </ParallaxImage>
        </span>
        );
    }
}

