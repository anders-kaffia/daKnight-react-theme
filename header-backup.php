<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/build/media/img/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
		<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.31.0/mapbox-gl.css' rel='stylesheet' />
        <title><?php if(is_front_page()):bloginfo('description');else: wp_title(''); endif;?> | <?php bloginfo('name');?></title>
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries --> 
        <!--[if lt IE 9]> 
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script> 
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script> 
        <script>alert('To display this site properly, please update Internet Explorer or use another newer internet browser.');</script>
        <![endif]--> 
        <?php wp_head(); ?>
    </head>
    <body <?php body_class() ?>>
	<div id="wrapper-backup">
		<div class="flex-row">
			<div id="header-wrapper"  class="flex-row">
				<div id="header-backup" class="flex-row">
					<a href="#main-wrapper">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/build/media/img/DKN_Logotyp_Svart.jpg" alt="daKnight logo" id="dk-logo" />
					</a>
					<nav id="top-nav">
						<?php wp_nav_menu( array(
							'menu' => 'spare_menu'
						) );
						?>
					</nav>
				</div>
			</div>
		</div>
