  var React    = require('react');
  var ReactDOM = require('react-dom');
  

// Create Component
 var SplashPage = React.createClass({
     render:function(){
         return (
            <div>
                <h1>Hey</h1>
            </div>
            
         );
     }
 });

 


 //Put component into html page
 ReactDOM.render(<SplashPage/>, document.getElementById('splashPage'));