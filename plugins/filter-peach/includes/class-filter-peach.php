<?php
/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://wpdoctor.se
 * @since      1.0.0
 *
 * @package    Filter_Peach
 * @subpackage Filter_Peach/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * @since      1.0.0
 * @package    Filter_Peach
 * @subpackage Filter_Peach/includes
 * @author     Dhanuka Gunarathna <dhanuka@wpdoctor.se>
 */
class Filter_Peach {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Filter_Peach_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'FILTER_PEACH_VERSION' ) ) {
			$this->version = FILTER_PEACH_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = 'filter-peach';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_public_hooks();
	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Filter_Peach_Loader. Orchestrates the hooks of the plugin.
	 * - Filter_Peach_i18n. Defines internationalization functionality.
	 * - Filter_Peach_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( __DIR__ ) . 'includes/class-filter-peach-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( __DIR__ ) . 'includes/class-filter-peach-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( __DIR__ ) . 'public/class-filter-peach-public.php';

		$this->loader = new Filter_Peach_Loader();
	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Filter_Peach_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Filter_Peach_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );
	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$plugin_public = new Filter_Peach_Public( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'filter_peach_remove_unwanted_scripts', 999 );
		$this->loader->add_action( 'init', $plugin_public, 'filter_peach_blocks_register_site_blocks' );
		$this->loader->add_action( 'enqueue_block_editor_assets', $plugin_public, 'filter_peach_blocks_register_block_editor_js' );
		$this->loader->add_action( 'enqueue_block_editor_assets', $plugin_public, 'filter_peach_blocks_register_editor_hooks' );

		$this->loader->add_filter( 'allowed_block_types_all', $plugin_public, 'filter_peach_blocks_disable_core_blocks', 10, 1 );
		$this->loader->add_filter( 'render_block', $plugin_public, 'filter_peach_blocks_enable_img_tag_layzy_load', 10, 2 );
		$this->loader->add_filter( 'wp_omit_loading_attr_threshold', $plugin_public, 'filter_peach_blocks_change_lazy_loading_threshold', 10, 1 );
		$this->loader->add_filter( 'render_block_core/heading', $plugin_public, 'filter_peach_blocks_add_custom_class_to_headings', 10, 2 );

		$this->loader->add_filter( 'nav_menu_css_class', $plugin_public, 'filter_peach_menu_item_classes', 10, 3 );
		$this->loader->add_filter( 'nav_menu_link_attributes', $plugin_public, 'filter_peach_menu_item_link_classes', 10, 3 );
		$this->loader->add_filter( 'wp_nav_menu_items', $plugin_public, 'filter_peach_add_dynamic_menu_items', 10, 2 );
	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Filter_Peach_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}
}
