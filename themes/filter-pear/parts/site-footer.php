<?php
/**
 * Filter Pear Theme Footer Template
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Filter Pear
 * @since 1.0.0
 */

?>

<footer class="site-footer mt-auto bg-primary pt-5 pb-5 pt-lg-6 pb-lg-6">

	<div class="container">
		<div class="row mb-4">
			<div class="col-12 d-flex justify-content-center justify-content-lg-start">
				<div>
					<a href="<?php bloginfo( 'url' ); ?>" aria-label="<?php echo esc_attr_e( 'Homepage of Filter Pear', 'filter-pear-theme' ); ?>">
						<img data-src="<?php echo esc_url( get_template_directory_uri() . '/resources/images/logo-white.svg' ); ?>" alt="<?php echo esc_attr_e( 'Filter Pear Site White Logo', 'filter-pear-theme' ); ?>" class="mw-100 lazyload"  />
					</a>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-12 col-lg-4">
			<?php
					wp_nav_menu(
						array(
							'theme_location'  => 'footer_menu_1',
							'container'       => 'nav',
							'menu_id'         => 'footer-menu-one',
							'menu_class'      => 'footer-menu-one list-unstyled text-center text-lg-left',
							'container_class' => 'footer-menu-one-wrap mt-3',
						)
					);
					?>
			</div>
			<div class="col-12 col-lg-4">
			<?php
					wp_nav_menu(
						array(
							'theme_location'  => 'footer_menu_2',
							'container'       => 'nav',
							'menu_id'         => 'footer-menu-one',
							'menu_class'      => 'footer-menu-one list-unstyled text-center text-lg-left',
							'container_class' => 'footer-menu-one-wrap mt-3',
						)
					);
					?>
			</div>
			<div class="col-12 col-lg-4">
			<?php
					wp_nav_menu(
						array(
							'theme_location'  => 'footer_menu_3',
							'container'       => 'nav',
							'menu_id'         => 'footer-menu-one',
							'menu_class'      => 'footer-menu-one list-unstyled text-center text-lg-left',
							'container_class' => 'footer-menu-one-wrap mt-3',
						)
					);
					?>
			</div>
		</div>

		<div class="row">
			<div class="col-12 d-flex mt-4 flex-column flex-lg-row">
				
				<div class="footer-contact flex-grow-1 d-flex flex-column align-items-center align-items-lg-start">
					<div class="mb-2">
						<a href="tel:+44123456789" class="color-white text-decoration-hover">+44 123 456 789</a>
					</div>
					<div>
						<a href="mailto:hello@website.com" class="color-white text-decoration-hover">hello@website.com</a>
					</div>
				</div>	

				<div class="footer-social mt-4 mt-lg-0 align-items-center align-items-lg-end d-flex flex-column">
					<ul class="list-unstyled d-flex align-items-center">
						<li class="pl-1 pr-1">
							<a href="https://www.facebook.com/" class="color-white h5" target="_blank">
								<span class="icon-facebook-circled" aria-hidden="true"></span>
								<span class="visually-hidden"><?php echo esc_html_e( 'Filter Pear Facebook page link, Opens in a new tab', 'filter-pear-theme' ); ?></span>
							</a>
						</li>
						<li class="pl-1 pr-1">
							<a href="https://x.com/" class="color-white h6" target="_blank">
								<span class="icon-twitter-x" aria-hidden="true"></span>
								<span class="visually-hidden"><?php echo esc_html_e( 'Filter Pear Twitter X page link, Opens in a new tab', 'filter-pear-theme' ); ?></span>
							</a>
						</li>
						<li class="pl-1 pr-1">
							<a href="https://www.youtube.com/" class="color-white h5" target="_blank">
								<span class="icon-youtube-play" aria-hidden="true"></span>
								<span class="visually-hidden"><?php echo esc_html_e( 'Filter Pear YouTube channel link, Opens in a new tab', 'filter-pear-theme' ); ?></span>
							</a>
						</li>
						<li class="pl-1 pr-1">
							<a href="https://www.instagram.com/" class="color-white h5" target="_blank">
								<span class="icon-instagram-1" aria-hidden="true"></span>
								<span class="visually-hidden"><?php echo esc_html_e( 'Filter Pear Instagram page link, Opens in a new tab', 'filter-pear-theme' ); ?></span>
							</a>
						</li>
						<li class="pl-1 pr-1">
							<a href="https://open.spotify.com/" class="color-white h5" target="_blank">
								<span class="icon-spotify" aria-hidden="true"></span>
								<span class="visually-hidden"><?php echo esc_html_e( 'Filter Pear Spotify profile link, Opens in a new tab', 'filter-pear-theme' ); ?></span>
							</a>
						</li>
						<li class="pl-1 pr-1">
							<a href="https://www.linkedin.com/" class="color-white h5" target="_blank">
								<span class="icon-linkedin-rect" aria-hidden="true"></span>
								<span class="visually-hidden"><?php echo esc_html_e( 'Filter Pear Linkedin page link, Opens in a new tab', 'filter-pear-theme' ); ?></span>
							</a>
						</li>
					</ul>

					<div class="d-flex justify-content-center justify-content-lg-end">
						<span class="color-white">&copy; Company</span>
					</div>
				</div>

			</div>
		</div>

	</div>

</footer>
