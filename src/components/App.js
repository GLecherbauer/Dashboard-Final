import React, {useEffect} from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
function App() {

  useEffect(() =>{
		
		fetch("/api/products")
		.then(response => response.json())
		.then(data => {
			
			console.log(data)
		
		})
		.catch(error => console.log(error))

	},[])
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
        </div>
    </React.Fragment>
  );
}

export default App;
