<?php
/**
 * Default template fallback
 */
get_header();
?>

<div class="page-transition">
    <main class="site-main container" style="padding-top:10rem;min-height:60vh;">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article>
                <h1><?php the_title(); ?></h1>
                <div class="entry-content"><?php the_content(); ?></div>
            </article>
        <?php endwhile; endif; ?>
    </main>
</div>

<?php get_footer(); ?>
