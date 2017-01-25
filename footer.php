<?php $staticimage = get_field('bakgrundsbild'); ?>

<div class="container-fluid footer">
	<div class="row">
		<div class="background-half lazy-half" style="background-image:url('https://daknight.se/wp-content/uploads/2015/03/footer_final.jpg'); ">
			<div class="col-xs-8 col-xs-offset-2 col-sm-3 col-sm-offset-2 hvr-fade-background special-offer-one animated infinite">
				<h4>SEO</h4>
				<p>Ta del av våra 10 bästa tips angående sökmotoroptimering</p>	
			</div>
			<div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5 form-offer pop-up offer-one">
				<form action="https://www.siz.se/subscription/add/55081af5d387012cef606a37" method="POST" accept-charset="utf-8" enctype="multipart/form-data">
                <img class="close-form-offer img-responsive" src="<?php echo get_template_directory_uri();?>/assets/media/img/x.png">
                <h5>Ta del av SEO </h5>
					<label>Email</label>
					<input type="text" name="email"/><br/>

					<label>Förnamn</label>
					<input type="text" name="fnamn"/><br/>

					<label>Efternamn</label>
					<input type="text" name="enamn"/><br/>

					<label>Mobil</label>
					<input type="text" name="mobil"/><br/>

					<label>Företag</label>
					<input type="text" name="foretag"/><br/>

					<input type="hidden" name="utm_source" />
					<input type="hidden" name="utm_medium" />
					<input type="hidden" name="utm_campaign" />
					<input type="hidden" name="utm_term" />
					<input type="hidden" name="utm_content" />

					<input type="hidden" value="https://daknight.se/?p=840" name="redirect">
					<input type="submit" value="Skicka" name="subscribe">
				</form>

			</div>
			<div class="col-xs-8 col-xs-offset-2 col-sm-3 col-sm-offset-2 hvr-fade-background special-offer-two animated infinite">
				<h4>Google Apps</h4>
				<p>Ta del av våra 10 bästa tips om Google Apps</p>
			</div>
			<div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5 form-offer pop-up offer-two">
				<form action="https://www.siz.se/subscription/add/55082e67d387012cef606a48" method="POST" accept-charset="utf-8" enctype="multipart/form-data">
					<img class="close-form-offer img-responsive" src="<?php echo get_template_directory_uri();?>/assets/media/img/x.png">
                	<h5>Ta del av Google Apps</h5>
					<label>Email</label>
					<input type="text" name="email"/><br/>

					<label>Förnamn</label>
					<input type="text" name="fnamn"/><br/>

					<label>Efternamn</label>
					<input type="text" name="enamn"/><br/>

					<label>Mobil</label>
					<input type="text" name="mobil"/><br/>

					<label>Foretag</label>
					<input type="text" name="foretag"/><br/>

					<input type="hidden" name="utm_source" />
					<input type="hidden" name="utm_medium" />
					<input type="hidden" name="utm_campaign" />
					<input type="hidden" name="utm_term" />
					<input type="hidden" name="utm_content" />

					<input type="hidden" value="https://daknight.se/?p=842" name="redirect">
					<input type="submit" value="Skicka" name="subscribe">
				</form>

			</div>
			<div class="col-xs-12 social-media-buttons">
				<a class="hvr-fade-text" href="https://www.facebook.com/DaKnightProductionsAb"><i class="fa fa-facebook fa-3x"></i></a>
				<a class="hvr-fade-text" href="https://www.linkedin.com/company/daknight-productions-ab"><i class="fa fa-linkedin fa-3x"></i></a>
				<a class="hvr-fade-text" href="mailto:support@daknight.se"><i class="fa fa-envelope-o fa-3x"></i></a>
			</div>
			<div class="col-xs-12 copy">
				<p>&copy; Daknight Productions AB | Org: 556847-7656 | Besöksadress: Hornsgatan 110, 117 26 Stockholm</p>
			</div>
		</div>
	</div>
</div>	
	<?php wp_footer(); ?>
	
	<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/scripts/scripts.min.js"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/assets/scripts/libraries/jquery.sidr.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/assets/scripts/libraries/jquery.rwdImageMaps.min.js"></script>
	</body>
</html>

