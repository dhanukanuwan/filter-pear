<?php
/**
 * Filter Pear default single post template
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

		<div class="container">
			<div class="row">
				<div class="col-12 pt-5 pt-lg-6 pb-5">
				<?php
				if ( have_posts() ) {
					while ( have_posts() ) {
						the_post();

						the_content();
					}
				}
				?>
				</div>
			</div>
		</div>

	</main>

	<?php get_template_part( 'parts/site', 'footer' ); ?>

</div>

<?php
get_footer();
