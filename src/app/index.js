  var React    = require('react');
  var ReactDOM = require('react-dom');

  import ParallaxImage from 'react-image-parallax2';
  

    
// Create Component
 var SplashPage = React.createClass({
     render:function(){
         return (
            <div>
                 <ParallaxImage 
                    src={('../assets/main.JPG')}
                    reduceHeight={0.30}>
                </ParallaxImage>

                <ParallaxImage 
                    src={('../assets/katiebeach.jpg')}
                    reduceHeight={0.65}>
                </ParallaxImage>

                <ParallaxImage 
                    src={('../assets/Sample.jpg')}
                    reduceHeight={0.30}>
                </ParallaxImage>
            
            </div>
            
         );
     }
 });

 


 //Put component into html page
 ReactDOM.render(<SplashPage/>, document.getElementById('splashPage'));