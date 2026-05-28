<?php
/**
 * Theme Customizer Settings
 */

function bloom_customizer_register($wp_customize) {
    // Contact Info Section
    $wp_customize->add_section('bloom_contact_info', array(
        'title'    => 'Contact Information',
        'priority' => 30,
    ));

    // Email
    $wp_customize->add_setting('bloom_email', array('default' => 'kwesi@bloomadvisors.uk', 'sanitize_callback' => 'sanitize_email'));
    $wp_customize->add_control('bloom_email', array('label' => 'Email Address', 'section' => 'bloom_contact_info', 'type' => 'email'));

    // Phone
    $wp_customize->add_setting('bloom_phone', array('default' => '+44 (0) 7990 774379', 'sanitize_callback' => 'sanitize_text_field'));
    $wp_customize->add_control('bloom_phone', array('label' => 'Phone Number', 'section' => 'bloom_contact_info', 'type' => 'text'));

    // Address
    $wp_customize->add_setting('bloom_address', array('default' => '6th Floor, 37 Lombard Street, London, EC3V 9BQ', 'sanitize_callback' => 'sanitize_text_field'));
    $wp_customize->add_control('bloom_address', array('label' => 'Address', 'section' => 'bloom_contact_info', 'type' => 'textarea'));

    // Social Links Section
    $wp_customize->add_section('bloom_social', array(
        'title'    => 'Social Links',
        'priority' => 35,
    ));

    $wp_customize->add_setting('bloom_linkedin', array('default' => '', 'sanitize_callback' => 'esc_url_raw'));
    $wp_customize->add_control('bloom_linkedin', array('label' => 'LinkedIn URL', 'section' => 'bloom_social', 'type' => 'url'));

    $wp_customize->add_setting('bloom_twitter', array('default' => '', 'sanitize_callback' => 'esc_url_raw'));
    $wp_customize->add_control('bloom_twitter', array('label' => 'Twitter/X URL', 'section' => 'bloom_social', 'type' => 'url'));
}
add_action('customize_register', 'bloom_customizer_register');
