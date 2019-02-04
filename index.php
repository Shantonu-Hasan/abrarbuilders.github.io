<!DOCTYPE html>

<html>
<head name="top">
<title>Title of the document</title>
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<link href="model/style.css" rel="stylesheet" type="text/css">

	<!-- Attach our CSS -->
  	<link rel="stylesheet" href="slider/orbit-1.2.3.css">
  	
	<!-- Attach necessary JS -->
	<script type="text/javascript" src="slider/jquery-1.5.1.min.js"></script>
	<script type="text/javascript" src="slider/jquery.orbit-1.2.3.js"></script>	
	
		<!--[if IE]>
		     <style type="text/css">
		         .timer { display: none !important; }
		         div.caption { background:transparent; filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000,endColorstr=#99000000);zoom: 1; }
		    </style>
		<![endif]-->
	
	<!-- Run the plugin -->
	<script type="text/javascript">
		$(window).load(function() {
			$('#featured').orbit();
			$('.orbit-wrapper').css({ width: 875, height: 390 });
			$('#featured').css({ width: 875, height: 390 });
			$('.left').css({ width: 50, height: 70 });
			$('.right').css({ width: 50, height: 70 });
		});
	</script>

</head>

<body>
<div id="header-wrap">
	<div class="container">
		<?php require_once("side_bar/header.php"); ?>
	</div>
</div>
<div id="banner-wrap">
	<img src="images/shadow.png" width="940px" height="120px" >
</div>
<div id="page-wrap">
	<div class="container">
		<div id="slider">
			<div id="featured" style="width:800px;">
				<img src="slider/slider-images/real.jpg"  data-caption="#htmlCaption" />
				<img src="slider/slider-images/1851.jpg" data-caption="#htmlCaption2" />
				<img src="slider/slider-images/small-home.jpg" data-caption="#htmlCaption3" />
				<img src="slider/slider-images/build.jpg" data-caption="#htmlCaption4" />
			</div>
		<!-- Captions for Orbit -->
			<span class="orbit-caption" id="htmlCaption"><strong>A Peaceful Environment</strong></span>
			<span class="orbit-caption" id="htmlCaption2"><strong>We Provide High Rise Living</strong></span>
			<span class="orbit-caption" id="htmlCaption3"><strong>Ensures Proper Delivery of Your Home</strong></span>
			<span class="orbit-caption" id="htmlCaption4"><strong>We Build Your Dream !</strong></span>
		</div>
		
		<div id="content">
			<div id="about">
				<strong>Welcome to My Company</strong><br>
				<div class="para">
				Established in Early 2006 with an overview to establish a state of art Ready-made garments factory, where buyers will feel real comfort to use the facility to produce their products. The company is having well experienced and highly professional staff and workforce, these experienced and professional work force is main asset of A PLUS GROUP. A PLUS INDUSTRIES LTD has a complete and systematic Merchandising department, with experienced Merchandisers to cater the needs` of the customer. A PLUS has a very strong sourcing capability both Imported and local. Also the Development and sampling department under the guidance of the Merchandisers are preparing development and or the customer. As tother sample fime passed we acquired ITS Certificate. We believe in Welfre and safety of our workers. We are maintaining the highest standard of safety. We work by our ethical code known as Code of Conduct, we believe in QUALITY, QUANTITY & ON TIME DELIVERY. very strong sourcing capability both Imported and local. very strong sourcing capability both Imported and local. very strong sourcing capability both Imported and local.  very strong sourcing capability both.
				</div>
				<div class="para">
				Established in Early 2006 with an overview to establish a state of art Ready-made garments factory, where buyers will feel real comfort to use the facility to produce their products. The company is having well experienced and highly professional staff and workforce, these experienced and professional work force is main asset of A PLUS GROUP. A PLUS INDUSTRIES LTD has a complete and systematic Merchandising department, with experienced Merchandisers to cater the needs` of the customer. A PLUS has a very strong sourcing capability both Imported and local. Also the Development and sampling department under the guidance of the Merchandisers are preparing development and or the customer. As tother sample fime passed we acquired ITS Certificate. We believe in Welfre and safety of our workers. We are maintaining the highest standard of safety. We work by our ethical code known as Code of Conduct, we believe in QUALITY, QUANTITY & ON TIME DELIVERY. very strong sourcing capability both Imported and local. very strong sourcing capability both Imported and local. very strong sourcing capability both Imported and local.  very strong sourcing capability both.
				</div>
			</div>
			<div id="right-nav">
				<div class="nav-thumb">
					<div class="nav-icon"><a href="#"><img src="images/4953364.jpg" width="92px" height="92px"></a></div>
					<div class="nav-text"><a href="#">Upcoming Projects<br><span style="font-weight:normal;">Click to view</span></a></div>
				</div>
				<div class="nav-thumb">
					<div class="nav-icon"><a href="#"><img src="images/4953364.jpg" width="92px" height="92px"></a></div>
					<div class="nav-text"><a href="#">Upcoming Projects<br><span style="font-weight:normal;">Click to view</span></a></div>
				</div>
				<div class="nav-thumb">
					<div class="nav-icon"><a href="#"><img src="images/4953364.jpg" width="92px" height="92px"></a></div>
					<div class="nav-text"><a href="#">Upcoming Projects<br><span style="font-weight:normal;">Click to view</span></a></div>
				</div>
			</div>
		</div>
	</div>
</div>
<div id="footer-wrap">
	<div class="container">
		<?php require_once("side_bar/footer.php"); ?>
	</div>
</div>
</body>

</html> 