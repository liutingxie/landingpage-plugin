<?php

/**
 * Plugin Name: Landing Page
 * Description: Create landing page
 * Version: 1.0
 * Author: storm
 */

define( 'LANDINGPAGE_DIR', plugin_dir_path( __FILE__ ) );
require_once( LANDINGPAGE_DIR . '/template-page.php');


add_action( 'wp_enqueue_scripts', 'landingpage_wp_enqueue_script' );

function landingpage_wp_enqueue_script() {
	wp_enqueue_style( 'landingpage', plugins_url('css/style.css', __FILE__) );
	wp_enqueue_style( 'bootstrap', plugins_url('css/bootstrap.min.css', __FILE__) );
	wp_enqueue_script( 'bootstrap-slider', plugins_url('js/bootstrap.js', __FILE__), array('jquery') );
	wp_enqueue_script( 'landingpage', plugins_url('js/landingpage.js', __FILE__), array('jquery') );
	wp_enqueue_script( 'neon-hex', plugins_url('js/neon-hex.js', __FILE__), array('jquery') );
	wp_enqueue_script( 'd3.min', plugins_url('js/d3.min.js', __FILE__) );
	wp_enqueue_script( 'puzzle', plugins_url('js/puzzle.js', __FILE__), array('jquery', 'd3.min') );
	// wp_enqueue_script( 'epicyclic-gearing', plugins_url('js/epicyclic-gearing.js', __FILE__), array('d3.min') );

}

