<?php 
/**
*
* The startpage.
*
*
*/

get_header(); ?>

<?php $staticimage = get_field('bakgrundsbild'); ?>
<?php the_post(); ?>

<div class="container-fluid front-page">
	<div class="row">
		<div class="background lazy" style="background-image:url('<?php echo $staticimage['url']; ?>'); ">
			<div class="slogan">
				<h1 class="slogan-row slogan-row-one animated fadeInLeftBig"><?php the_field('slogan_row_one'); ?></h1>
				<h1 class="slogan-row slogan-row-two"><?php the_field('slogan_row_two'); ?></h1>
				<h1 class="slogan-row slogan-row-three"><?php the_field('slogan_row_three'); ?></h1>
			</div>
			<p class="arrow animated infinite bounce">
				<img src="<?php echo get_template_directory_uri();?>/assets/media/img/Superlight_Pil.png ?>">
			</p>
		</div>
	</div>
</div>
<?php if(have_rows('section')) :
	while(have_rows('section')) : the_row(); ?>
		<div class="container-fluid section" style="background-color: <?php the_sub_field('color'); ?>">
			<?php $color = get_sub_field('color'); ?>

			<div class="row">
				<div class="col-sm-12 push-down">
					<?php if($color != '#ffffff') : ?>
						<h2 style="color: #ffffff;" class="push-down push-up"><?php the_sub_field('title'); ?></h2>
					<?php else: ?>	
						<h2 class="push-down push-up"><?php the_sub_field('title'); ?></h2>
					<?php endif;?>
					<?php $image_one = get_sub_field('image_one'); ?>
					<?php $image_two = get_sub_field('image_two'); ?>
	
				<img class="img-responsive scheme-row-one" src="<?php echo get_template_directory_uri();?>/assets/media/img/schema/Schema2_01.png">
			
				<img class="img-responsive scheme-row-two" src="<?php echo get_template_directory_uri();?>/assets/media/img/schema/Schema2_02.png">
				<img class="img-responsive scheme-row-three" src="<?php echo get_template_directory_uri();?>/assets/media/img/schema/Schema2_03.png">

					<!--img src="<?php echo $image_one['url']; ?>" alt="<?php echo $image['alt']; ?>" />
					<img src="<?php echo $image_two['url']; ?>" alt="<?php echo $image['alt']; ?>" /-->
				</div>
				<div class="col-sm-8 col-sm-offset-2 push-up">
					<?php if($color != '#ffffff') : ?>
						<div style="color:#ffffff;" class="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 push-up"><?php the_sub_field('content'); ?></div>
					<?php else: ?>	
						<div class="push-down col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 push-up"><?php the_sub_field('content'); ?></div>
					<?php endif;?>
					
				</div>
			</div>
		</div>
	<?php endwhile; 
	endif; ?>
<div class="container-fluid front-page">
	<div class="row contact-block">
		<div class="col-sm-6 col-sm-offset-3 contact-hover">
			<h2><?php the_field('contact_field_row_one'); ?></h2>
			<span class="span-title animated infinite"><?php the_field('contact_field_row_two'); ?></span>
		</div>
	</div>
	<div class="block-hover">
	</div>
	<div class="block-start-project">
<!-- 		<div class="push-down close-start-project col-sm-1 col-sm-offset-11">
			<img class="img-responsive" src="<?php echo get_template_directory_uri();?>/assets/media/img/x.png">
		</div> -->
<!-- 		<div class="col-sm-4 col-sm-offset-4 start-project"> -->
			<div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5 form-contact">
	            <form action="https://www.siz.se/subscription/add/53ad2f65f1e5d71ffb8c4b38" method="POST" accept-charset="utf-8" enctype="multipart/form-data">
	            	<img class="close-start-project img-responsive" src="<?php echo get_template_directory_uri();?>/assets/media/img/x.png">
	                <h5>Kontakta oss! </h5>
	                <label>Namn</label><br/>
	                <input type="text" name="namn"/><br/>

	                <label>Mail</label><br/>
	                <input type="text" name="mail"/><br/>

	                <label>Telefon</label><br/>
	                <input type="text" name="telefon"/><br/>

	                <label>Ämne</label><br/>
	                <input type="text" name="caemne"/><br/>

	                <label>Fråga</label><br/>
	                <textarea name="frcaegga"></textarea><br/>

	                <input type="hidden" name="utm_source" />
	                <input type="hidden" name="utm_medium" />
	                <input type="hidden" name="utm_campaign" />
	                <input type="hidden" name="utm_term" />
	                <input type="hidden" name="utm_content" />

	                <input type="hidden" value="https://daknight.se/?p=533" name="redirect">
	                <input type="submit" value="Skicka" name="subscribe">
	            </form>
	        </div>
<!-- 		</div> -->
	</div>	
	<div class="container">
		<div class="row push-up push-down">
			<?php

			// check if the repeater field has rows of data
			if( have_rows('puffar') ):

			 	// loop through the rows of data
			    while ( have_rows('puffar') ) : the_row(); ?>
					<div class="col-sm-4 service">
						<!--?php $image = get_sub_field('image'); ?-->
						<?php the_sub_field('font_awesome'); ?>
				        <h5><?php the_sub_field('title'); ?></h5>
				        <?php the_sub_field('content'); ?>
			        </div>

			    <?php endwhile;

			else :

			    // no rows found

			endif;

			?>
		</div>
	</div>
	
</div>
<script>
        console.log("Live fil");
    </script>
<?php get_footer('home');?>
