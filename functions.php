<?php
//Register WP Menu
register_nav_menus( array(
	'top_menu' => "Main Top Menu",
));

//Enable thumbnails
add_theme_support( 'post-thumbnails' ); 

// Adds theme styles and scripts
function theme_styles_and_scripts(){

	// Font Awesome
	wp_enqueue_style( 'prefix-font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css', array(), '4.6.3' );
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