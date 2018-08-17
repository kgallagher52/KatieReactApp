  var React    = require('react');
  var ReactDOM = require('react-dom');

  import ParallaxComponent   from '../components/ParallaxComponent';
  import NavigationComponent from '../components/NavigationComponent';
  import '../style/main.css';

    
// Create Component
 var AppContainer = React.createClass({
     render:function(){
         return (
            <div className="main-container">
                <ParallaxComponent></ParallaxComponent>
               
            </div>
            
         );
     }
 });

 


 //Put component into html page
 ReactDOM.render(<AppContainer/>, document.getElementById('appContainer'));