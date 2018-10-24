<?php

 /*
 Template Name: landing page
 */

get_header(); ?>


<div class="full-demo">

	<div>
		<section class="section neon-position" id="home">
			<nav id="navbar-demo" class="navbar neon-index">
			  	<h1 class="navbar-brand">Storm Demo</h1>
			  	<ul class="nav nav-pills">
<!-- 			    	<li class="nav-item">
				      	<a class="nav-link" href="#home">Home</a>
				    </li> -->
				    <li class="nav-item">
				      	<a class="nav-link" href="#cryptocurrency">CryptoCurrency</a>
				    </li>
				    <li class="nav-item">
				      	<a class="nav-link" href="#stormslider">StormSlider</a>
				    </li>
			  	</ul>
			</nav>
			<div id="demo-slider" class="carousel slide container my-5 neon-index" data-ride="carousel">
				<h1 class="text-center text-white neon-index">Portfolio list</h1>
				<div class="carousel-inner" role="listbox">
			    	<div class="carousel-item active">
			    		<img src="<?php echo plugins_url('/image/currencyBackground.png', __FILE__ ); ?>" alt="cryptocurrency slide">
			      		<div class="carousel-caption demo-center">
						    <h2>Welcome To CryptoCurrencies Markets</h2>
						    <h4>This will show cryptoCurrency world</h4>
						    <a class="btn btn-lg red-orange-color" href="<?php echo site_url() . "/cryptocurrency"; ?>" role="button">Market Demo View</a>
						</div>
			    	</div>
			    	<div class="carousel-item">
			    		<img src="<?php echo plugins_url('/image/slider.gif', __FILE__); ?>" alt="storm slide">
			      		<div class="carousel-caption">
						    <h2>Welcome To Slider</h2>
						    <h4>This Is WordPress Slider Plugin</h4>
						    <a class="btn btn-lg red-orange-color" href="<?php echo site_url() . "/slider-demo"; ?>" role="button">Slider Demo View</a>
						</div>
			    	</div>
			  	</div>
			  	<a class="carousel-control-prev" href="#demo-slider" role="button" data-slide="prev">
			    	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			    	<span class="sr-only">Previous</span>
			  	</a>
			  	<a class="carousel-control-next" href="#demo-slider" role="button" data-slide="next">
			    	<span class="carousel-control-next-icon" aria-hidden="true"></span>
			    	<span class="sr-only">Next</span>
			  	</a>
			</div>
			<div class="neon-hex">
				<canvas></canvas>
				<canvas></canvas>
			</div>
		</section>

		<section class="section section-gray mt-3" id="cryptocurrency">
			<div class="container">
				<div class="demo-description">
					<div class="demo-cryptocurrency-plugin row">
						<div class="demo-cryptocurrency-description col-md-4">
							<h3 class="red-orange-text-color">WordPress CryptoCurrency Plugin</h3>
							<div class="demo-skill row">
								<div class=" xs-12 col-6 col-md-12 col-lg-6">
									<h4><i class="dashicons dashicons-yes"></i>WordPress</h4>
								</div>
								<div class=" xs-12 col-6 col-md-12 col-lg-6">
									<h4><i class="dashicons dashicons-yes"></i>D3.js</h4>
								</div>
							</div>
							<div class="demo-skill row">
								<div class=" xs-12 col-6 col-md-12 col-lg-6">
									<h4><i class="dashicons dashicons-yes"></i>Real Time</h4>
								</div>
								<div class=" xs-12 col-6 col-md-12 col-lg-6">
									<h4><i class="dashicons dashicons-yes"></i>Responsive</h4>
								</div>
							</div>
							<div>
								This WordPress plugins show the all avaliable coins list on the page, and using d3.js show the chart on the coins single page.
							</div>
							<div>
								Using real time stream progress way, the data will be real time.
							</div>
							<div class="mt-5">
						    	<a class="btn btn-lg btn-block red-orange-color" href="<?php echo site_url() . "/cryptocurrency"; ?>" role="button">Market Demo View</a>
							</div>
						</div>
						<div class="demo-cryptocurrency-slide col-md-8 bg-white rounded">
							<div id="demo-cryptocurrency-slider-plugin" class="carousel slide" data-ride="carousel">
								<div class="carousel-inner" role="listbox">
							    	<div class="carousel-item active">
							      		<img class="img-fluid" src="<?php echo plugins_url('/image/cryptocurrency.png', __FILE__); ?>" alt="cryptocurrency slide">
							    	</div>
							    	<div class="carousel-item">
							      		<img class="img-fluid" src="<?php echo plugins_url('/image/cryptocurrency-coin.png', __FILE__); ?>" alt="cryptocurrency slide">
							    	</div>
							    	<div class="carousel-item">
							      		<img class="img-fluid mx-auto d-block" src="<?php echo plugins_url('/image/cryptocurrency-responsive.png', __FILE__); ?>" alt="cryptocurrency slide">
							    	</div>
							    	<div class="carousel-item">
							      		<img class="img-fluid mx-auto d-block" src="<?php echo plugins_url('/image/cryptocurrency-responsive-coin.png', __FILE__); ?>" alt="cryptocurrency slide">
							    	</div>
							  	</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="container d-none d-lg-block d-xl-block d-xl-none" id="puzzle"></section>
		<section class="section section-gray" id="stormslider">
			<div class="container">
				<div class="demo-description">
					<div class="demo-slider-plugin row">
						<div class="demo-slider-slide col-md-8 rounded">
							<div id="demo-slider-plugin-slider" class="carousel slide" data-ride="carousel">
								<div class="carousel-inner" role="listbox">
							    	<div class="carousel-item active">
							      		<img class="img-fluid mx-auto d-block" src="<?php echo plugins_url('/image/slider.png', __FILE__); ?>" alt="slider slide">
							    	</div>
<!-- 							    	<div class="carousel-item">
							      		<img class="img-fluid mx-auto d-block" src="<?php echo plugins_url('/image/slider-setting.png', __FILE__); ?>" alt="slider slide">
							    	</div> -->
							  	</div>
							</div>
						</div>
						<div class="demo-slider-description col-md-4 mt-3">
							<h3 class="red-orange-text-color">WordPress Slider Plugin</h3>
							<div class="row">
								<div class="xs-12 col-6 col-md-12 col-lg-6">
									<h4><i class="dashicons dashicons-yes"></i>GreenSock</h4>
								</div>
								<div class="xs-12 col-6 col-md-12 col-lg-6 ">
									<h4><i class="dashicons dashicons-yes"></i>Responsive</h4>
								</div>
							</div>
							<div>
								This is WordPress slider plugin. install this plugin you can create many effect slider, have 3D and 2D effect, you can add many button, text and image, this plugin isresponsive.
							</div>
							<div class="mt-5">
						    	<a class="btn btn-lg btn-block red-orange-color" href="<?php echo site_url() . "/slider-demo"; ?>" role="button">Slider Demo View</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- <section class="container" id="gearing"></section> -->
	</div>

	<footer class="footer footer-header">
		<div class="container">
			<div class="row">
				<div class="author-contact col-md-4">
					<aside>
						<h4 class="text-white">Useful Links</h4>
						<p>Skype: liutingxie</p>
						<p>WhatsApp: +86 13649441928</p>
						<p>WeChat: 371561724</p>
					</aside>
				</div>
				<div class="author-social-media col-md-4">
					<aside>
						<h4 class="text-white">Follow Us</h4>
						<a href="" target="_blank" class="dashicons dashicons-facebook mr-3"></a>
						<a href="" target="_blank" class="dashicons dashicons-twitter mr-3"></a>
						<a href="mailto:storm.liutingxie@yahoo.com" class="dashicons dashicons-email-alt"></a>
					</aside>
				</div>
				<div class="author-donate col-md-4">
					<aside>
						<h4 class="text-white">Donation</h4>
						<p>Your contribution is vital for us.</p>
						<button type="button" class="btn red-orange-color" data-toggle="modal" data-target="#model-dialog">Donate</button>
					</aside>
				</div>
			</div>
			<div class="reserved">
				<hr>
				© Storm. 2018 All rights reserved.
			</div>
		</div>

	</footer>
</div>
<div class="modal fade" id="model-dialog" tabindex="1" role="dialog" aria-labelledby="donate-title" aria-hidden="true">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h2 class="modal-title" id="donate-title">Donation</h2>
			</div>
			<div class="modal-body">
				<div class="message alert alert-success text-success" role="alert">You contribution is vital for our project. Here are our cryptocurrencies addresses.</div>
				<form>
          			<div class="form-group">
          				<lable>Bitcoin</lable>
						<div class="input-group">
						  	<input type="text" class="form-control" aria-describedby="Bitcoin-copy" readonly value="1NsPaZh3hRGRrduYQzHrvPtGzWQg4FhLyi">
						  	<button class="btn copy-button red-orange-color" id="Bitcoin-copy">Copy<span class="dashicons dashicons-admin-page ml-2"></span></button>
						</div>
          			</div>
          		</form>
          		<form>
          			<div class="form-group">
          				<lable>Ethereum</lable>
						<div class="input-group">
						  	<input type="text" class="form-control" aria-describedby="Ethereum-copy" readonly value="0x27e3F0e7D0a43bf4A1e2d4a0ec2EF49139cE98D1">
						  	<button class="btn copy-button red-orange-color" id="Ethereum-copy">Copy<span class="dashicons dashicons-admin-page ml-2"></span></button>
						</div>
          			</div>
          		</form>
          		<form>
          			<div class="form-group">
          				<lable>DigitalCash</lable>
						<div class="input-group">
						  	<input type="text" class="form-control" aria-describedby="DigitalCash-copy" readonly value="XqN9ziK5erbeM36oD8JVg33sCcyuhVEj1A">
						  	<button class="btn copy-button red-orange-color" id="DigitalCash-copy">Copy<span class="dashicons dashicons-admin-page ml-2"></span></button>
						</div>
          			</div>
          		</form>
          		<form>
          			<div class="form-group">
          				<lable>EOS</lable>
						<div class="input-group">
						  	<input type="text" class="form-control" aria-describedby="EOS-copy" readonly value="0x27e3F0e7D0a43bf4A1e2d4a0ec2EF49139cE98D1">
						  	<button class="btn copy-button red-orange-color" id="EOS-copy">Copy<span class="dashicons dashicons-admin-page ml-2"></span></button>
						</div>
          			</div>
          		</form>
			</div>
			<div class="modal-footer">
				<div class="input-group">
				  	<div class="input-group-append">
						<button type="button" class="btn btn-success" data-dismiss="modal">Thank you<span class="dashicons dashicons-yes ml-2"></span></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>