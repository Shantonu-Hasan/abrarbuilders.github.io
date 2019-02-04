<!DOCTYPE html>

<html>
<head name="top">
<title>Title of the document</title>
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<link href="model/style.css" rel="stylesheet" type="text/css">
</head>

<body>
<div id="header-wrap">
	<div class="container">
		<!--
		<div id="header">
			<a href="#" title="Abrar Builders Limited"><div id="logo"></div></a>
			<div class="menu" style="float:right;">
				<div class="button active"><a href="index.html">Home</a></div>
				<div class="button"><a href="about.html">About</a></div>
				<div class="button"><a href="#">Projects</a></div>
				<div class="button"><a href="#">Contact</a></div>
				<div class="button"><a href="#">TOC</a></div>
			</div>
		</div>
		-->
		<?php require_once("side_bar/header.php"); ?>
	</div>
</div>
<div id="banner-wrap">
	<img src="images/shadow.png" width="940px" height="120px" >
</div>
<div id="page-wrap">
	<div class="container">
		<div id="contact-content">
			<div class="row">
				<div class="left">
					<div class="title"><strong>Contact Abrar Builders</strong></div>
					<br>
					<form action="">
						<div class="about-info-text-label">Name <span style="color:red;">*</span></div>
						<input type="text" name="name" id="name" class="about-info-text">
						<div class="about-info-text-label">Email <span style="color:red;">*</span></div>
						<input type="text" name="email" id="email" class="about-info-text">
						<div class="about-info-text-label">Subject</div>
						<input type="text" name="subject" id="subject" class="about-info-text">
						<div class="about-info-text-label">Message <span style="color:red;">*</span></div>
						<textarea name="message" id="message" cols="50" rows="2"></textarea>
						<br><br>
						<input type="submit" name="submit" id="submit" value="Submit">
					</form>
				</div>
				<div class="right">
					<div class="title"><strong>Geo Location</strong></div>
					<img src="data/geo_location.jpg" width="100%" height="340px">
					<br><br><br><br>
					<div class="title"><strong>Office</strong></div>					
					<strong>Address</strong>
					<div class="para">Abrar Buiders & Developers Ltd.</div>
					A.H Tower<br>
					Road # 02, Sector # 03<br>
					Shop # 06, Uttara, Dhaka-1230<br>
					<div class="para"><strong>Phone</strong> +000000000000</div>
					<div class="para"><strong>FAX</strong>      +000000000000</div>
					<div class="para"><strong>Email</strong> abrar@mail.com</div>
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