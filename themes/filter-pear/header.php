<?php
/**
 * Filter Pear Theme Header
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Filter Pear
 * @since 1.0.0
 */

?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" media="print" onload="this.onload=null;this.removeAttribute('media');" fetchpriority="high">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	<?php // Skip to main content link for accessibility. ?>
	<a href="#main-content" class="visually-hidden-focusable"><?php esc_html_e( 'Skip to main content', 'filter-pear-theme' ); ?></a>

<?php
wp_body_open();
