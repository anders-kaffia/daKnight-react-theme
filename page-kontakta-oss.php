<?php
/*
*
*
* Page Kontakt
*
*
*/

get_header('backup'); ?>
<?php $staticimage = get_field('bakgrundsbild'); ?>
<?php the_post(); ?>

<div class="container-fluid">
    <div class="row">
        <div class="form-support col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5 start-project">
            

            <form id="sizform_v2" action="localhost" data-listid="573322a60a9a0f3a9dbfe028" method="POST" accept-charset="utf-8" enctype="multipart/form-data">

                <img class="close-form-support img-responsive" src="<?php echo get_template_directory_uri();?>/assets/media/img/x.png">
                <h5>Kontakta oss! </h5>
              
              <label>Namn</label>
              <input type="text" name="NAMN"/><br/>

              <label>Mail</label>
              <input type="text" name="EMAIL"/><br/>

              <label>Telefon</label>
              <input type="text" name="TELE"/><br/>

              <label>Ämne</label>
              <input type="text" name="SUBJECT"/><br/>

              <label>Fråga</label>
                <textarea name="MESSAGE"></textarea><br/>

              <!--Vänligen ta ej bort denna. Vi försöker undvika troll i våra listor-->
              <input type="text" value="" name="mata_inte_trollen" style="position:absolute;z-index:-9;left:-9999px;top:-9999px"
                     placeholder="Om du ser detta så är det fel">
              <!--Tack-->
              <input type="hidden" value="https://daknight.se/?p=533" name="redirect">
                <input type="submit" value="Skicka" name="subscribe">
            </form>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
            <script src="https://s3-eu-west-1.amazonaws.com/siz-data/public/sizform.min.js?e579a1a1"></script>





<?php /*
            <form action="https://www.siz.se/subscription/add/53ad2f65f1e5d71ffb8c4b38" method="POST" accept-charset="utf-8" enctype="multipart/form-data">
                <img class="close-form-support img-responsive" src="<?php echo get_template_directory_uri();?>/assets/media/img/x.png">
                <h5>Kontakta oss! </h5>
                <label>Namn</label><br/>
                <input type="text" name="namn"/><br/>

                <label>Mail</label><br/>
                <input type="text" name="mail"/><br/>

                <label>Telefon</label><br/>
                <input type="text" name="telefon"/><br/>

                <label>Ämne</label><br/>
                <input type="text" name="caemne"/><br/>

                <label>Fråga</label><br/>
                 <textarea name="frcaegga"></textarea><br/>

                <input type="hidden" name="utm_source" />
                <input type="hidden" name="utm_medium" />
                <input type="hidden" name="utm_campaign" />
                <input type="hidden" name="utm_term" />
                <input type="hidden" name="utm_content" />
                <input type="hidden" name="mata_inte_trollen" />

                <input type="hidden" value="https://daknight.se/?p=533" name="redirect">
                <input type="submit" value="Skicka" name="subscribe">
            </form>
*/?>

        </div>
    </div>
</div>
<div class="container">
    <div class="row">
            <div class="page-title push-down col-sm-8 col-sm-offset-2">
                <h1 class=""><?php the_title(); ?></h1>
                <span class="span-title"><?php the_content(); ?></span>
            </div>
        <?php
        // check if the repeater field has rows of data
        if( have_rows('columns') ):

            // loop through the rows of data
            while ( have_rows('columns') ) : the_row(); ?>
                <?php $image = get_sub_field('image'); ?>
                <div class="col-sm-4 service">
                    <img src="<?php echo $image['url']; ?>" />
                    <?php echo the_sub_field('font_awesome'); ?>
                    <h5><?php the_sub_field('title'); ?></h5>
                    <?php the_sub_field('content'); ?>
                    <a class="preventdefault open-form-support" href="#"><?php the_sub_field('call_to_form'); ?></a>
                </div>
            <?php endwhile;

        else :

            // no rows found

        endif;

        ?>
    </div>
	<div class="row">
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdJJ3dx8IfDc5Yi8v_6QweQpcNt0BD5Bg"></script>
        
        <script type="text/javascript">
            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 13,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(59.335722, 18.052138), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#e2e2e2"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#b9b9b9"},{"lightness":20}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#dbdbdb"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f1f1f1"},{"lightness":21}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#ff0000"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#b2c1c1"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"weight":".2"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"saturation":"-100"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":"35"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#414141"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#c0c0c0"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"lightness":"100"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":"28"},{"saturation":"5"},{"hue":"#009bff"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"lightness":"71"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"lightness":"58"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(59.335722, 18.052138),
                    map: map,
                    title: 'Snazzy!'
                });
            }
        </script>

		 <div class="col-xs-12 push-down push-up" id="map">
		 </div>
	</div>
</div>

 <?php get_footer('backup'); ?>