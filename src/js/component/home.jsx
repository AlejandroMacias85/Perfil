import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";

//create your first component
const Home = () => {
	return (
		<>
	<body className="d-flex h-100 text-center text-bg-dark">
    
	<div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
	  <header className="mb-auto">
		<Navbar />
	  </header>
	
	  <main className="px-3">
		<Jumbotron />
	  </main>
	
	  <footer className="mt-auto text-white-50">
		<p>Cover template for <a href="https://www.nesabamedia.com/wp-content/uploads/2018/10/background-img_02.png" className="text-black">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-black">@mdo</a>.</p>
	  </footer>
	</div>
	
	
		
	  
	
	</body>
		</>
	);
};

export default Home;
