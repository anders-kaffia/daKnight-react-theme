<?php get_header('backup'); ?>
<div id="wrapper-backup">
	<div class="single">
		<?php if (have_posts()) : ?>
			<?php while (have_posts()) : ?>
				<h1>
					<!--Checks if title is set by ACF-->
					<?php if(get_field('title')) : ?>
						<?php the_field('title') ?>
					<?php else : ?>
						<?php the_title(); ?>
					<?php endif; ?>
				</h1>
				<?php the_post(); ?>
				<?php the_content(); ?>
				<!--Checks for ACF box fields-->
				<?php if (get_field('box_1')) : ?>
					<?php the_field('box_1') ?>
				<?php endif; ?>
				<?php if (get_field('box_2')) : ?>
					<?php the_field('box_2') ?>
				<?php endif; ?>
				<?php if (get_field('box_3')) : ?>
					<?php the_field('box_3') ?>
				<?php endif; ?>
				<?php if (get_field('box_4')) : ?>
					<?php the_field('box_4') ?>
				<?php endif; ?>
				<?php if (get_field('box_5')) : ?>
					<?php the_field('box_5') ?>
				<?php endif; ?>
				<?php if (get_field('box_6')) : ?>
					<?php the_field('box_6') ?>
				<?php endif; ?>
				<!-- / Checks for ACF box fields-->

				<!--Checks for ACF Columns repeater field-->
				<?php if( have_rows('columns') ): ?>
					<?php while ( have_rows('columns') ) : the_row(); ?>
						<?php the_sub_field('content'); ?>
					<?php endwhile; ?>
				<?php endif; ?>
				<!-- / Checks for ACF Columns repeater field-->


			<?php endwhile; ?>
		<?php endif; ?>
	</div> <!-- / .single -->

<?php get_footer('backup'); ?>