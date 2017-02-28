			<div  id="footer-backup">
				<div class="flex-column">
					<?php
						$the_slug = 'footer';
						$args = array(
							'name'        => $the_slug,
							'post_type'   => 'page',
						);
						$my_posts = get_posts($args);
						if( $my_posts ) :
							echo $my_posts[0]->post_content;
						endif;
					?>
				</div>
			</div>
		</div> <!-- / #wrapper-backup -->
	<?php wp_footer(); ?>
	</body>
</html>