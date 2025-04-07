<?php
/**
 * Filter Pear Theme Index File
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Filter Pear
 * @since 1.0.0
 */

get_header();

?>

<div id="filter-pear-app" class="min-vh-100 d-flex flex-column">

	<?php get_template_part( 'parts/site', 'header' ); ?>

	<main id="main-content" class="main">

		<?php if ( have_posts() ) : ?>

			<div class="pt-5 pt-lg-6 pb-5 pb-lg-6">
				<div class="container">

					<?php while ( have_posts() ) : ?>
						<?php the_post(); ?>

						<div class="row">
							<div class="col-12">
								<article <?php post_class(); ?>>

									<header class="post-header">
										<h2><?php the_title(); ?></h2>
									</header>

									<section class="post-content">
										<?php the_content(); ?>
									</section>

								</article>
							</div>
						</div>

					<?php endwhile; ?>

				</div>
			</div>

		<?php endif; ?>

	</main>

	<?php get_template_part( 'parts/site', 'footer' ); ?>

</div>

<?php
get_footer();
