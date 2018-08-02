import React from 'react';



const SearchBox =({Searchfield, onsearch}) =>
{

	return(
		       <div className='pa2'>
				    <input 
				     className='pa3 ba ba--green bg-lightest-blue'
				     type='search' 
				     placeholder='Search Robo'
				     onChange= {onsearch}
				     />
		    
		       </div>
				);
}
export default SearchBox;