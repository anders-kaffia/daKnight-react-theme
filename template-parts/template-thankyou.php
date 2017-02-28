<?php
/**
*
*
* Template name: Thank you
*
*/

get_header('backup'); ?>
<div class="container-fluid front-page">
	<div class="row">
		<div class="background" style="background-color:#c6b9a7; ?>'); ">
			<div class="slogan col-sm-6 col-sm-offset-3">
				<?php the_post(); ?>
				<h1 class="slogan-row"> Tack!</h1>
				<h1 class="slogan-row"><?php the_content();?></h2>
			</div>
		</div>
	</div>

</div>

<?php get_footer('backup'); ?>