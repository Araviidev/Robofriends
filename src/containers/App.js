import React,{ Component } from 'react';
import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../App.css';

//App component contains all components and calls 
class App extends Component
{
	constructor()
	{   super();
		this.state =
		{ 
		    robots: [],
	        Searchfield: ''
	    }
	}

    OnSearchChange =(event)=>
     {
	      this.setState({Searchfield: event.target.value});
     }
     
    componentDidMount()
    {
    	fetch('https://jsonplaceholder.typicode.com/users')
    	.then(response => response.json()) 
    	.then(users => {this.setState({robots: users})});
    }

	render()
	{
          const {robots,Searchfield} = this.state;
		    const filteredrobots = robots.filter(robots=>
		  	{
		  		return robots.name.toLowerCase().includes(Searchfield.toLowerCase());
		  	})

	  if(!robots.length)
	  {
	  	return <h1>Loading</h1>
	  	 }
    	else
	    {
		  return(
		      <div className='tc'>
		      <h1 className='f1'>ROBO FRIENDS</h1>
		      <hr/>
		      <SearchBox onsearch={this.OnSearchChange}/>
              <Scroll>
              <CardArray robots= {filteredrobots}/>
              </Scroll>
              </div>
		   );
	    }	  
    }
}

export default App;