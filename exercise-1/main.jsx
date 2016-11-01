// Main.jsx file

// Create a simple component
var MyComponent = React.createClass({
    render:function() {
    // In your render function...
        // Set variables `name` and `interest`
        var name = 'Sam T';
        var interest = 'Formula 1 Racing';
        // Return div with two paragraphs
        return(
          <div>
            <p>Hello, my name is {name}.</p>
            <p>I am interested in {interest}</p>
          </div>
        )
    }
});
// Render your component in the `main` section
ReactDOM.render(<MyComponent/>, document.querySelector('main'));
