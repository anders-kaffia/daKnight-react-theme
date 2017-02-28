<?php
/*
*
*
* Page Uppdrag
*
*
*/

get_header('backup'); ?>
<?php $staticimage = get_field('bakgrundsbild'); ?>
<?php the_post(); ?>

<div class="container-fluid">
    <div class="row">
        <div class="background-2-3 lazy-2-3">
            <div class="slogan col-sm-6 col-sm-offset-3">
                <?php the_content(); ?>
            </div>
        </div>
    </div>
</div>
<div class="container">
        <?php

        // check if the repeater field has rows of data
        if( have_rows('case') ): 
        	 $counter = 0;
            // loop through the rows of data
            while ( have_rows('case') ) : the_row(); ?>
            	<div class="row push-down push-up">
               	<?php $counter++; ?>
				<?php $image = get_sub_field('image'); ?>
              	<?php if ($counter % 2 == 0) : ?>
					<div class="col-xs-12 col-sm-6 view view-tenth">
						<h5 class="visible-xs"><?php the_sub_field('title'); ?></h5>
						<img src="<?php echo $image['url']; ?>" />
						<div class="mask">   
							<a target="_blank" href="<?php the_sub_field('url'); ?>" class="info">Besök webbplats</a>  
						</div>
					</div>
					<div class="hidden-xs col-xs-12 col-sm-6 case">
						<h5><?php the_sub_field('title'); ?></h5>
						<?php the_sub_field('content'); ?>
					</div>  
				<?php else : ?>
				  	<div class="hidden-xs col-xs-12 col-sm-6 case">
						<h5><?php the_sub_field('title'); ?></h5>
						<?php the_sub_field('content'); ?>
				  	</div>
				  	<div class="col-xs-12 col-sm-6 view view-tenth">
				  		<h5 class="visible-xs"><?php the_sub_field('title'); ?></h5>
				  		<img src="<?php echo $image['url']; ?>" />
						<div class="mask">  
							<a target="_blank" href="<?php the_sub_field('url'); ?>" class="info">Besök webbplats</a>  
						</div>
				  	</div>
				<?php endif; ?>
				</div>
				<hr>
            <?php endwhile;

        endif;

        ?>
</div>

 <?php get_footer('backup'); ?>