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
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		//wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/filter-peach-public.css', array(), $this->version, 'all' );

	}
}
