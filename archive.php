<?php
/*
Template Name: Archives
*/
get_header('backup'); ?>
<?php $staticimage = get_field('bakgrundsbild'); ?>
<?php the_post(); ?>

<div class="container">
	<div class="row">
		<div class="col-sm-8 col-sm-offset-2">
		<?php 
			$arg = array('post_type' => 'post', 'showposts' => -1);
			$myposts = get_posts( $arg );

			//loop to get content
			foreach ( $myposts as $post ) : setup_postdata( $post ); ?>
				<article>
					<a href="<?php the_permalink(); ?>">
						<h5><?php the_title(); ?></h5>
						<span><?php the_date(); ?></span>
					</a>
					<p><?php the_excerpt(); ?></p>
				</article>
				<hr>
			<?php endforeach; 
			wp_reset_postdata();?>
		</div>
	</div>	
</div>

<?php get_footer('backup'); ?>