<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?php wp_title( '|', true, 'right' ); ?></title>
        <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/styles/components/jquery.sidr.dark.css">
        <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/styles/animate.css">
        <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/styles/styles.css">
        <link href='//fonts.googleapis.com/css?family=Roboto:300,700' rel='stylesheet' type='text/css'>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
        <?php wp_head(); ?>
    </head>
    <body <?php body_class( $class ); ?>>
    <header class="header">
        <nav class="navbar">
            <div class="container-fluid">
                <div class="row push-down">

                    <div class="col-md-2 col-sm-4 col-xs-6">
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img class="logo img-responsive" src="<?php echo get_template_directory_uri();?>/assets/media/img/logo_white.png"></a>
                    </div>
                    <div class="slide-menu">
                        <span class="menu">MENY</span>
                        <i class="fa fa-bars fa-2x"></i>
                    </div>
                </div>

                <div class="row nopad">
                    <nav class="col-md-12 nopad push-down">
                        <?php wp_nav_menu(array('theme_location' => 'top_menu', 'menu_class' => 'menu top-menu')); ?>
                    </nav>
                </div>

            </div>
        </nav>
    </header>

      