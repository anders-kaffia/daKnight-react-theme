<?php 
/**
*
*
* Template name: Form
*
*
*/

get_header('backup'); ?>
<?php $staticimage = get_field('bakgrundsbild'); ?>
<?php the_post(); ?>

<div class="container-fluid">
    <div class="row">
        <div class="background-fixed lazy" style="background-image:url('<?php echo $staticimage['url']; ?>'); ">
        </div>
    </div>
</div>
<div class="container template-form">
    <div class="row push-down push-up">
        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4 push-down">
            <?php the_content(); ?>
        </div>
    </div>
</div>


 <?php get_footer('backup'); ?>