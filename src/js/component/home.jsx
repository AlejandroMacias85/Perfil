import React from "react";

//include images into your bundle
import { Navbar } from "./Navbar";
import Jumbotron from "./Jumbotron"
import { Card } from "react-bootstrap";
//create your first component
const Home = () => {
	return (
		<>
			<body className="d-flex h-100 text-center text-bg-dark">
				<div className="container">
					<div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
						<header className="mb-auto">
							<Navbar />
						</header>

						<main className="px-3">
							<Jumbotron />
						</main>


						<div className="row mb-2">
							<div className="col-md-6">
								<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
									<div className="col p-4 d-flex flex-column position-static">
										<strong className="d-inline-block mb-2 text-primary">World</strong>
										<h3 className="mb-0">Featured post</h3>
										<div className="mb-1 text-muted">Nov 12</div>
										<p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
										<a href="#" className="stretched-link">Continue reading</a>
									</div>
									<div className="col-auto d-none d-lg-block">
										<svg className="bd-placeholder-img" width="200" height="250" xmlns="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c4e43916334997.562aa26a395a4.jpg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
									<div className="col p-4 d-flex flex-column position-static">
										<strong className="d-inline-block mb-2 text-success">Design</strong>
										<h3 className="mb-0">Post title</h3>
										<div className="mb-1 text-muted">Nov 11</div>
										<p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
										<a href="#" className="stretched-link">Continue reading</a>
									</div>
									<div className="col-auto d-none d-lg-block">
										<svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

									</div>
								</div>
							</div>
						</div>

						<div className="row g-5">
							<div className="col-md-8">
								<h3 className="pb-4 mb-4 fst-italic border-bottom">
									From the Firehose
								</h3>

								<Card className="bg-dark text-white">
									<Card.Img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c4e43916334997.562aa26a395a4.jpg" alt="Card image" />
									<Card.ImgOverlay>
										<Card.Title>Card title</Card.Title>
										<Card.Text>
											This is a wider card with supporting text below as a natural lead-in
											to additional content. This content is a little bit longer.
										</Card.Text>
										<Card.Text>Last updated 3 mins ago</Card.Text>
									</Card.ImgOverlay>
								</Card>

							</div>

							<div className="col-md-4">
								<div className="position-sticky">
									<div className="p-4 mb-3 bg-light rounded">
										<h4 className="fst-italic">About</h4>
										<p className="mb-0 shadow p-3 mb-5 bg-body rounded">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
									</div>

									<div className="p-4">
										<h4 className="fst-italic">Archives</h4>

									</div>

									<div className="p-4">
										<h4 className="fst-italic">Elsewhere</h4>
										<ol className="list-unstyled">
											<li><a href="https://github.com/AlejandroMacias85">GitHub</a></li>
											<li><a href="#">Twitter</a></li>
											<li><a href="#">Facebook</a></li>
										</ol>
									</div>
								</div>
							</div>
						</div>
						<footer className="mt-auto text-white-50">
							<p>Cover template for <a href="https://www.nesabamedia.com/wp-content/uploads/2018/10/background-img_02.png" className="text-black">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-black">@mdo</a>.</p>
						</footer>
					</div>
				</div>
			</body>
		</>
	);
};

export default Home;



