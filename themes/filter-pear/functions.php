<?php
/**
 * Theme functions and definitions
 *
 * @package Folter Pear
 * @since Folter Pear 1.0
 */

if ( ! function_exists( 'filter_pear_initial_setup' ) ) {

	/**
	 * Setting up theme defaults.
	 */
	function filter_pear_initial_setup() {

		/**
		 * Make theme available for translation.
		 */
		load_theme_textdomain( 'filter-pear-theme', get_template_directory() . '/languages' );

		/**
		 * Add title tag support.
		 */
		add_theme_support( 'title-tag' );

		/**
		 * Add default posts and comments RSS feed links to <head>.
		 */
		add_theme_support( 'automatic-feed-links' );

		/**
		 * Enable support for post thumbnails and featured images.
		 */
		add_theme_support( 'post-thumbnails' );

		/**
		 * Add support for two custom navigation menus.
		 */
		register_nav_menus(
			array(
				'primary'   => __( 'Primary Menu', 'filter-pear-theme' ),
				'secondary' => __( 'Footer Menu', 'filter-pear-theme' ),
			)
		);
	}

	add_action( 'after_setup_theme', 'filter_pear_initial_setup' );
}


if ( ! function_exists( 'filter_pear_theme_enqueue_scripts' ) ) {

	/**
	 * Register theme styles and javascript.
	 */
	function filter_pear_theme_enqueue_scripts() {

		$asset_css = include_once get_theme_file_path( 'public/css/app.asset.php' );
		$asset_js  = include_once get_theme_file_path( 'public/js/app.asset.php' );

		wp_enqueue_style( 'filter-pear', get_theme_file_uri( 'public/css/app.css' ), $asset_css['dependencies'], $asset_css['version'] );
		wp_enqueue_script( 'filter-pear', get_theme_file_uri( 'public/js/app.js' ), $asset_js['dependencies'], $asset_js['version'], true );
	}

	add_action( 'wp_enqueue_scripts', 'filter_pear_theme_enqueue_scripts' );
}

if ( ! function_exists( 'filter_pear_theme_editor_styles' ) ) {

	/**
	 * Load editor stylesheets.
	 */
	function filter_pear_theme_editor_styles() {
		add_editor_style(
			array(
				get_theme_file_uri( 'public/css/app.css' ),
			)
		);
	}

	add_action( 'after_setup_theme', 'filter_pear_theme_editor_styles' );

}

if ( ! function_exists( 'filter_pear_theme_editor_assets' ) ) {

	/**
	 * Load editor assets.
	 */
	function filter_pear_theme_editor_assets() {

		$asset_css = include_once get_theme_file_path( 'public/css/editor.asset.php' );

		wp_enqueue_style( 'filter-pear-editor', get_theme_file_uri( 'public/css/editor.css' ), $asset_css['dependencies'], $asset_css['version'] );
	}

	add_action( 'enqueue_block_editor_assets', 'filter_pear_theme_editor_assets' );
}
