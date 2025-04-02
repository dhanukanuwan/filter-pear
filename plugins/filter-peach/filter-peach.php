<?php
/**
 * The plugin bootstrap file
 *
 * @link              https://wpdoctor.se
 * @since             1.0.0
 * @package           Filter_Peach
 *
 * @wordpress-plugin
 * Plugin Name:       Filter Peach
 * Plugin URI:        https://wpdoctor.se
 * Description:       Custom blocks and customizations for the filter peach site
 * Version:           1.0.0
 * Author:            Dhanuka Gunarathna
 * Author URI:        https://wpdoctor.se/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       filter-peach
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 */
define( 'FILTER_PEACH_VERSION', '1.0.0' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-filter-peach.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_filter_peach() {

	$plugin = new Filter_Peach();
	$plugin->run();
}

run_filter_peach();
