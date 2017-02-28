<?php

// Adds featured image endpoint to the WP REST API
function page_fetured_image_json( $data, $page, $context ) {
	$featured_image_id = $data->data['featured_media']; // get featured image id
	$featured_image_url = wp_get_attachment_image_src( $featured_image_id, 'original' ); // get url of the original size
	if( $featured_image_url ) {
		$data->data['featured_image_url'] = $featured_image_url[0];
	}
		
	return $data;
}
add_filter( 'rest_prepare_page', 'page_fetured_image_json', 10, 3 );

// Register WP Menu
register_nav_menus( array(
	'top_menu' => "Main Top Menu",
	'spare_menu' => "Spare menu",
));

// Enable thumbnails
add_theme_support( 'post-thumbnails' ); 

// Adds theme styles and scripts
function theme_styles_and_scripts(){

	// Font Awesome
	wp_enqueue_style( 'prefix-font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', array(), '4.7.0' );
	// Google Fonts
	wp_enqueue_style( 'googlefont_css', '//fonts.googleapis.com/css?family=Raleway|Rozha+One' );
	// Theme styles
	wp_enqueue_style( 'main', get_template_directory_uri() . '/build/styles/style.css' );

	// Bundle.js script is loaded in the footer. Otherwise React wont work.
	// wp_enqueue_script( 'main', get_template_directory_uri() . '/build/scripts/bundle.js' );
}
add_action('wp_enqueue_scripts', 'theme_styles_and_scripts');


// Custom post type template
// require_once 'lib/cp-xxxxxx.php';

?>