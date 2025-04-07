<?php
/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://wpdoctor.se
 * @since      1.0.0
 *
 * @package    Filter_Peach
 * @subpackage Filter_Peach/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * @package    Filter_Peach
 * @subpackage Filter_Peach/public
 * @author     Dhanuka Gunarathna <dhanuka@wpdoctor.se>
 */
class Filter_Peach_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string $plugin_name       The name of the plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;
	}

	/**
	 * Remove jQuery, Woocommerce styles and scripts from non woocommerce pages.
	 *
	 * @since    1.0.0
	 */
	public function filter_peach_remove_unwanted_scripts() {

		if ( is_admin() ) {
			return;
		}

		// Return early if WooCommerce is not active.
		if ( ! $this->filter_peach_is_woocommerce_activated() ) {
			return;
		}

		// Do not remove on WooCommerce pages.
		if ( is_woocommerce() || is_cart() || is_checkout() || is_product() ) {
			return;
		}

		wp_dequeue_script( 'jquery' );
		wp_deregister_script( 'jquery' );

		wp_dequeue_script( 'sourcebuster-js' );
		wp_deregister_script( 'sourcebuster-js' );

		wp_dequeue_script( 'wc-order-attribution' );
		wp_deregister_script( 'wc-order-attribution' );

		wp_dequeue_style( 'woocommerce-layout' );
		wp_deregister_style( 'woocommerce-layout' );

		wp_dequeue_style( 'woocommerce-smallscreen' );
		wp_deregister_style( 'woocommerce-smallscreen' );

		wp_dequeue_style( 'woocommerce-general' );
		wp_deregister_style( 'woocommerce-general' );

		wp_dequeue_style( 'brands-styles' );
		wp_deregister_style( 'brands-styles' );

		wp_dequeue_style( 'wc-blocks-style' );
		wp_deregister_style( 'wc-blocks-style' );
	}

	/**
	 * Add classes to wp menu items li.
	 *
	 * @since    1.0.0
	 * @param    string[] $classes Array of the CSS classes.
	 * @param    WP_Post  $item    The current menu item object.
	 * @param    stdClass $args    An object of wp_nav_menu() arguments.
	 */
	public function filter_peach_menu_item_classes( $classes, $item, $args ) {

		if ( 'primary' === $args->theme_location ) {
			$classes[] = 'pl-3 pr-3';
		}

		$footer_menus = array(
			'footer_menu_1',
			'footer_menu_2',
			'footer_menu_3',
		);

		if ( in_array( $args->theme_location, $footer_menus, true ) ) {
			$classes[] = 'pt-2 pb-2';
		}

		return $classes;
	}

	/**
	 * Add classes to wp menu items a.
	 *
	 * @since    1.0.0
	 * @param    array    $atts    The HTML attributes applied to the menu item’s <a> element.
	 * @param    WP_Post  $item    The current menu item object.
	 * @param    stdClass $args    An object of wp_nav_menu() arguments.
	 */
	public function filter_peach_menu_item_link_classes( $atts, $item, $args ) {

		$current_class_list = '';
		$new_classes        = '';

		$footer_menus = array(
			'footer_menu_1',
			'footer_menu_2',
			'footer_menu_3',
		);

		if ( isset( $atts['class'] ) ) {
			$current_class_list = $atts['class'];
		}

		if ( 'primary' === $args->theme_location ) {
			$new_classes = $current_class_list . ' text-decoration-hover';
		}

		if ( in_array( $args->theme_location, $footer_menus, true ) ) {
			$new_classes = $current_class_list . ' color-white text-decoration-hover';
		}

		if ( ! empty( $new_classes ) ) {
			$atts['class'] = $new_classes;
		}

		return $atts;
	}

	/**
	 * Add dynamic menu items to the main nav menu.
	 *
	 * @since    1.0.0
	 *
	 * @param    string $items .
	 * @param    array  $args .
	 */
	public function filter_peach_add_dynamic_menu_items( $items, $args ) {

		if ( 'primary' !== $args->theme_location ) {
			return $items;
		}

		$items .= '<li id="menu-item-cart" class="menu-item pl-3 pr-3">';
		$items .= '<a href="' . esc_url( home_url( '/cart' ) ) . '" id="menu-cart-link"  class="btn btn-link bg-white h6 text-primary mb-0">';
		$items .= '<span class="icon-cart-outline" aria-hidden="true"></span>';
		$items .= '<span class="visually-hidden" >' . __( 'Go to the shopping cart', 'filter-peach' ) . '</span>';
		$items .= '</a>';
		$items .= '</li>';

		$items .= '<li id="menu-item-search" class="menu-item pl-3 pr-3">';
		$items .= '<button type="button" id="menu-search-btn"  class="btn btn-link bg-white h6 text-primary mb-0">';
		$items .= '<span class="icon-search-1" aria-hidden="true"></span>';
		$items .= '<span class="visually-hidden" >' . __( 'Open search form', 'filter-peach' ) . '</span>';
		$items .= '</button>';
		$items .= '</li>';

		if ( is_user_logged_in() ) {
			$items .= '<li id="menu-item-logout" class="menu-item pl-3 pr-3">';
			$items .= '<a href="' . esc_url( wp_logout_url( home_url( '/' ) ) ) . '"  class="btn btn-primary ">' . __( 'Logout', 'filter-peach' ) . '</a>';
			$items .= '</li>';
		} else {
			$items .= '<li id="menu-item-login" class="menu-item pl-3 pr-3">';
			$items .= '<a href="' . esc_url( wp_login_url( get_permalink() ) ) . '"  class="btn btn-primary ">' . __( 'Login', 'filter-peach' ) . '</a>';
			$items .= '</li>';
		}

		return $items;
	}

	/**
	 * Check if WooCommerce is activated.
	 *
	 * @since    1.0.0
	 */
	private function filter_peach_is_woocommerce_activated() {

		if ( class_exists( 'woocommerce' ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Register blocks.
	 *
	 * @since    1.0.0
	 */
	public function filter_peach_blocks_register_site_blocks() {
		register_block_type( __DIR__ . '/blocks/build/content-section/' );
		register_block_type( __DIR__ . '/blocks/build/content-column/' );
		register_block_type( __DIR__ . '/blocks/build/button/' );
		register_block_type( __DIR__ . '/blocks/build/filter-peach-icon/' );
	}

	/**
	 * Register js for the block editor.
	 *
	 * @since    1.0.0
	 */
	public function filter_peach_blocks_register_block_editor_js() {
		wp_enqueue_script( 'filter-peach-block-filters', plugin_dir_url( __FILE__ ) . 'js/block-filters.js', array( 'wp-blocks', 'wp-dom' ), filemtime( plugin_dir_path( __FILE__ ) . 'js/block-filters.js' ), true );
	}

	/**
	 * Remove unwanted core blocks.
	 *
	 * @since    1.0.0
	 * @param  string $allowed_block_types  .
	 */
	public function filter_peach_blocks_disable_core_blocks( $allowed_block_types ) {

		$disallowed_blocks = array(
			'core/columns',
			'core/row',
			'core/group',
		);

		// Get all registered blocks if $allowed_block_types is not already set.
		if ( ! is_array( $allowed_block_types ) || empty( $allowed_block_types ) ) {
			$registered_blocks   = WP_Block_Type_Registry::get_instance()->get_all_registered();
			$allowed_block_types = array_keys( $registered_blocks );
		}

		// Create a new array for the allowed blocks.
		$filtered_blocks = array();

		// Loop through each block in the allowed blocks list.
		foreach ( $allowed_block_types as $block ) {

			// Check if the block is not in the disallowed blocks list.
			if ( ! in_array( $block, $disallowed_blocks, true ) ) {

				// If it's not disallowed, add it to the filtered list.
				$filtered_blocks[] = $block;
			}
		}

		return $filtered_blocks;
	}

	/**
	 * Customize image tag output to enable layzy loading.
	 *
	 * @since    1.0.0
	 * @param      string $block_content .
	 * @param      array  $block .
	 */
	public function filter_peach_blocks_enable_img_tag_layzy_load( $block_content, $block ) {

		if ( 'core/image' !== $block['blockName'] ) {
			return $block_content;
		}

		$block_content = str_replace( 'src="', 'loading="lazy" data-src="', $block_content );
		$block_content = str_replace( 'class="', 'class="lazyload mw-100 h-auto ', $block_content );

		return $block_content;
	}

	/**
	 * Customize media layzy loading threshold.
	 *
	 * @since    1.0.0
	 * @param      string $omit_threshold .
	 */
	public function filter_peach_blocks_change_lazy_loading_threshold( $omit_threshold ) {

		$omit_threshold = 1;

		return $omit_threshold;
	}

	/**
	 * Customize image tag output to enable layzy loading.
	 *
	 * @since    1.0.0
	 * @param      string $block_content .
	 * @param      array  $block .
	 */
	public function filter_peach_blocks_add_custom_class_to_headings( $block_content, $block ) { //phpcs:ignore

		$processor = new WP_HTML_Tag_Processor( $block_content );

		if ( $processor->next_tag() ) {
			$processor->add_class( 'mt-3' );
		}

		return $processor->get_updated_html();
	}

	/**
	 * Register custom hooks to the block editor.
	 *
	 * @since    1.0.0
	 */
	public function filter_peach_blocks_register_editor_hooks() {

		$dependancies = array( 'wp-block-editor', 'wp-components', 'wp-compose', 'wp-element' );
		$version      = $this->version;

		$deps_file = plugin_dir_path( __FILE__ ) . 'blocks/filters-build/block-filters/index.asset.php';

		if ( file_exists( $deps_file ) ) {
			$deps_file    = require $deps_file;
			$dependancies = $deps_file['dependencies'];
			$version      = $deps_file['version'];
		}

		wp_enqueue_script( 'filter-peach-block-attributes', plugin_dir_url( __FILE__ ) . 'blocks/filters-build/block-filters/index.js', $dependancies, $version, true );
	}
}
