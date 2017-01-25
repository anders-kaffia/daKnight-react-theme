<?php
/**
*
*
* Template name: Thank you
*
*/

get_header();
?>
<div class="container-fluid front-page">
	<div class="row">
		<div class="background" style="background-color:#e2ded8; ?>'); ">
			<div class="slogan col-sm-6 col-sm-offset-3">
				<?php the_post(); ?>
				<h1 class="slogan-row"> Tack!</h1>
				<h1 class="slogan-row"><?php the_content();?></h2>
			</div>
		</div>
	</div>

</div>

<?php get_footer('blank') ?>