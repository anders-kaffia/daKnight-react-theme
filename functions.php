<?php
//Register WP Menu
register_nav_menus( array(
	'top_menu' => "Main Top Menu",
));

//Enable thumbnails
add_theme_support( 'post-thumbnails' ); 

// Hooks
add_action('wp_enqueue_scripts', 'theme_styles');
function theme_styles(){       
	wp_enqueue_style( 'prefix-bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', array(), '3.3.6' );
	wp_enqueue_style( 'prefix-font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css', array(), '4.6.3' );
	wp_enqueue_style( 'main', get_template_directory_uri() . '/assets/styles/styles.css' );
}

// Custom post type template
// require_once 'lib/cp-xxxxxx.php';

?>