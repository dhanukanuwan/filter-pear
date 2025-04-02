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

				// All page content and elements will be handled through the Block Editor.
				the_content();
			}
		}
		?>

	</main>

	<?php get_template_part( 'parts/site', 'footer' ); ?>

</div>

<?php
get_footer();
