<?php get_header('backup'); ?>

	<div class="single-content flex-column">
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

				<!--Checks for ACF campain content-->
				<?php if(get_field('campaign_title')) : ?>
					<h4><?php the_field('campain_title') ?></h4>
					<?php the_field('campaign_content'); ?>
					<div>
						<form action="https://www.siz.se/subscription/add/55a64110d387013500f4b00d" method="POST" accept-charset="utf-8" enctype="multipart/form-data">
							<input type="text" name="email" placeholder="Email"/><br/>

							<input type="text" name="name" placeholder="Namn"/><br/>

							<input type="text" name="company" placeholder="Företag"/><br/>

							<input type="text" name="telephone" placeholder="Telefon"/><br/>

							<input type="hidden" name="utm_source" />
							<input type="hidden" name="utm_medium" />
							<input type="hidden" name="utm_campaign" />
							<input type="hidden" name="utm_term" />
							<input type="hidden" name="utm_content" />

							<input type="hidden" value="https://daknight.se/?p=1073" name="redirect">
							<input type="submit" value="Skicka" name="subscribe">
						</form>
					</div>  
				<?php endif; ?>
				<!-- / Checks for ACF campain content-->

				<!-- Checks for ACF columns content-->
				<?php if( have_rows('columns') ) : ?>
					<?php while ( have_rows('columns') ) : the_row(); ?>
						<?php $image = get_sub_field('image'); ?>
						<?php  if( !empty($image)) : ?>
							<img src="<?php echo $image['url']; ?>" />
						<?php endif; ?>
						<?php echo the_sub_field('font_awesome'); ?>
						<a href="<?php the_sub_field('url'); ?>"><h5><?php the_sub_field('title'); ?></h5></a>
						<?php the_sub_field('content'); ?>
						<a href="#"><?php the_sub_field('call_to_form'); ?></a>
					<?php endwhile ?>
				<?php endif ?>
				<!-- / Checks for ACF columns content-->

				<!-- Checks for ACF offers content-->
				<?php if( have_rows('offers') ): ?>
					<?php while ( have_rows('offers') ) : the_row(); ?>
					<?php  $count = 0;
						if( have_rows('columns')) : ?>
							<?php while(have_rows('columns')) : the_row(); ?>
								<?php $count++; ?>
								<?php $image = get_sub_field('image'); 
								if( !empty($image)) : ?>
									<img src="<?php echo $image['url']; ?>" />
								<?php endif; ?>
								<h5><?php the_sub_field('title'); ?></h5>
								<?php the_sub_field('content'); ?>
								<h6><?php the_sub_field('price'); ?></h6>
								<a href="#"><?php the_sub_field('call_to_form'); ?></a>
							<?php endwhile; ?>
						<?php endif; ?>
					<?php endwhile; ?>
				<?php endif; ?> 
				<!-- / Checks for ACF offers content-->

			<?php endwhile; ?>
		<?php endif; ?>
	</div> <!-- / .single -->

<?php get_footer('backup'); ?>