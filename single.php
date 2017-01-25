<?php 
/**
*
*
* Single.php
*
*/

get_header('grey'); ?>

<div class="container margin-top">
	<div class="row">
		<div class="col-sm-8 col-sm-offset-2 push-up">
		<?php //loop to get content
			if (have_posts()) : ?>
				<?php while (have_posts()) : the_post(); ?>
					<h5><?php the_title();?></h5>
					<?php the_content(); ?>
				<?php endwhile; ?>
			<?php endif; ?>
		
			<!-- <a href="index.php?page_id=416"> &laquo; Tillbaka till nyheter</a> -->
		</div>
	</div>
</div>

<?php get_footer(); ?>