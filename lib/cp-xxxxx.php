<?php

add_action( 'init', 'xxxxx_register_post_type' );

function xxxxx_register_post_type(){
	$labels = array(
		'name' => __('xxxxx Creative', 'xxxxx'),
		'singular_name' => __('xxxxx', 'xxxxx'),
		'add_new_item' => __('Add New xxxxx', 'xxxxx'),
		'edit_item' => __('Edit xxxxx', 'xxxxx'),
		'new_item' => __('New xxxxx', 'xxxxx'),
		'view_item' => __('View xxxxx', 'xxxxx'),
		'search_items' => __('Search xxxxx', 'xxxxx'),
		'not_found' =>  __('No xxxxx found', 'xxxxx'),
		'not_found_in_trash' => __('No xxxxx found in Trash', 'xxxxx')
	);
	$args = array(
		'label' => __('xxxxx Creative', 'xxxxx'),
		'labels' => $labels,
		'public' => true,
		'menu_position' => null,
		'rewrite' => true,
		'supports' => array('title', 'editor', 'thumbnail')
	);

	register_post_type('xxxxx', $args);
}
?>