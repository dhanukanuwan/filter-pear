<?php
/**
 * Filter Pear default page template
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Filter Pear
 * @since 1.0.0
 */

get_header();

?>
<div id="filter-pear-app" class="min-vh-100 d-flex flex-column">

	<?php get_template_part( 'parts/site', 'header' ); ?>

	<main id="main-content" class="main">

		<?php
		if ( have_posts() ) {
			while ( have_posts() ) {
				the_post();

				if ( has_blocks() ) {

					if ( class_exists( 'woocommerce' ) && ( is_woocommerce() || is_cart() || is_checkout() ) ) {
						?>
						<div class="container">
							<div class="row">
								<div class="col-12 pt-5 pb-5 pt-lg-6 pb-lg-6">
									<?php the_content(); ?>
								</div>
							</div>
						</div>
						<?php
					} else {
						// All page content and elements will be handled through the Block Editor.
						the_content();
					}
				} else {
					?>

					<div class="container">
						<div class="row">
							<div class="col-12 pt-5 pb-5 pt-lg-6 pb-lg-6">
								<?php the_content(); ?>
							</div>
						</div>
					</div>

					<?php
				}
			}
		}
		?>

	</main>

	<?php get_template_part( 'parts/site', 'footer' ); ?>

</div>

<?php
get_footer();
