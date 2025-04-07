<?php
/**
 * Filter Pear Theme Header Template
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Filter Pear
 * @since 1.0.0
 */

?>

<header class="site-header pt-3 pb-3">
	<div class="container">
		<div class="row">
			<div class="col-6 col-md-3">
				<a href="<?php bloginfo( 'url' ); ?>" aria-label="<?php echo esc_attr_e( 'Homepage of Filter Pear', 'filter-pear-theme' ); ?>">
					<img src="<?php echo esc_url( get_template_directory_uri() . '/resources/images/logo-dark.svg' ); ?>" alt="<?php echo esc_attr_e( 'Filter Pear Site Logo', 'filter-pear-theme' ); ?>" class="mw-100" width="131" height="46" />
				</a>
			</div>
			<div class="col-6 col-md-9 d-flex align-items-center">
				<?php
					wp_nav_menu(
						array(
							'theme_location'  => 'primary',
							'container'       => 'nav',
							'menu_id'         => 'main-menu',
							'menu_class'      => 'main-menu list-unstyled d-flex mb-0 align-items-center',
							'container_class' => 'main-menu-wrap ml-auto d-none d-lg-block',
						)
					);
					?>
			</div>
		</div>
	</div>
</header>
