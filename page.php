<?php
/*
*
*
* Page Kontakt
*
*
*/

get_header(); ?>
<?php $staticimage = get_field('bakgrundsbild'); ?>
<?php the_post(); ?>

<div class="container-fluid">
    <div class="row">
        <div class="background-2-3 lazy-2-3" style="background-image:url('<?php echo $staticimage['url']; ?>'); ">
        </div>
        <div class="form-service1 col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5 start-project">
            <form action="https://www.siz.se/subscription/add/548966ad3e47a208a995bfb9" method="POST" accept-charset="utf-8" enctype="multipart/form-data">
                <img class="close-form-support img-responsive" src="<?php echo get_template_directory_uri();?>/assets/media/img/x.png">
                <h5>Google AdWords</h5>
                <label>Email</label>
                <input type="text" name="email"/><br/>

                <label>Namn</label>
                <input type="text" name="namn"/><br/>

                <label>Företag</label>
                <input type="text" name="foretag"/><br/>

                <label>Telefon</label>
                <input type="text" name="telefon"/><br/>

                <input type="hidden" name="utm_source" />
                <input type="hidden" name="utm_medium" />
                <input type="hidden" name="utm_campaign" />
                <input type="hidden" name="utm_term" />
                <input type="hidden" name="utm_content" />

                <input type="hidden" value="https://daknight.se/?p=1033" name="redirect">
                <input type="submit" value="Skicka" name="subscribe">
            </form>
        </div>
        <div class="form-service2 col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5 start-project">
            <form action="https://www.siz.se/subscription/add/548966e83e47a208a995bfbe" method="POST" accept-charset="utf-8" enctype="multipart/form-data">
                <img class="close-form-support img-responsive" src="<?php echo get_template_directory_uri();?>/assets/media/img/x.png">
                <h5>Google Analytics</h5>

                <label>Email</label>
                <input type="text" name="email"/><br/>

                <label>Namn</label>
                <input type="text" name="namn"/><br/>

                <label>Företag</label>
                <input type="text" name="foretag"/><br/>

                <label>Telefon</label>
                <input type="text" name="telefon"/><br/>

                <input type="hidden" name="utm_source" />
                <input type="hidden" name="utm_medium" />
                <input type="hidden" name="utm_campaign" />
                <input type="hidden" name="utm_term" />
                <input type="hidden" name="utm_content" />

                <input type="hidden" value="https://daknight.se/?p=1036" name="redirect">
                <input type="submit" value="Skicka" name="subscribe">
            </form>
        </div>
        <div class="form-service3 col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5 start-project">
            <form action="https://www.siz.se/subscription/add/548966f53e47a208a995bfc3" method="POST" accept-charset="utf-8" enctype="multipart/form-data">
                <img class="close-form-support img-responsive" src="<?php echo get_template_directory_uri();?>/assets/media/img/x.png">
                <h5>Workshop</h5>
                <label>Email</label>
                <input type="text" name="email"/><br/>

                <label>Namn</label>
                <input type="text" name="namn"/><br/>

                <label>Företag</label>
                <input type="text" name="foretag"/><br/>

                <label>Telefon</label>
                <input type="text" name="telefon"/><br/>

                <input type="hidden" name="utm_source" />
                <input type="hidden" name="utm_medium" />
                <input type="hidden" name="utm_campaign" />
                <input type="hidden" name="utm_term" />
                <input type="hidden" name="utm_content" />

                <input type="hidden" value="https://daknight.se/?p=1039" name="redirect">
                <input type="submit" value="Skicka" name="subscribe">
            </form>
        </div>
    </div>
</div>
<div class="container custom-page">
    <div class="row push-down push-up">
        <div class="page-title col-sm-8 col-sm-offset-2">
            <h1><?php the_field('title'); ?></h1>
        </div>
        <div class="col-sm-6 col-sm-offset-3 push-down">
            <?php the_content(); ?>
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
                    <a href="<?php the_sub_field('url'); ?>"><h5><?php the_sub_field('title'); ?></h5></a>
                    <?php the_sub_field('content'); ?>
                    <a class="preventdefault open-form-support" href="#"><?php the_sub_field('call_to_form'); ?></a>
                </div>
            <?php endwhile;

        else :

            // no rows found

        endif;

        ?>
    
      <?php
       
        // check if the repeater field has rows of data
        if( have_rows('offers') ): 
            
            // loop through the rows of data
            while ( have_rows('offers') ) : the_row(); ?>
                <div class="col-sm-12 offer">
                   <!--  <h2 class="push-down"><?php the_sub_field('heading'); ?></h2> -->
                </div>
                <?php  $count = 0;
                if( have_rows('columns')) : ?>
                    <?php while(have_rows('columns')) : the_row(); 
                     $count++; ?>
                        <?php $image = get_sub_field('image'); ?>
                        <div class="col-sm-4 service">
                            <img src="<?php echo $image['url']; ?>" />
                            <h5><?php the_sub_field('title'); ?></h5>
                            <?php the_sub_field('content'); ?>
                            <h6><?php the_sub_field('price'); ?></h6>
                            <a class="service<?php echo $count ?> preventdefault" href="#"><?php the_sub_field('call_to_form'); ?></a>
                        </div>

                    <?php endwhile; ?>
                   
                <?php endif; ?>
                 
            <?php endwhile;

        else :

            // no rows found

        endif;

        ?> 

    </div>
</div>


 <?php get_footer(); ?>