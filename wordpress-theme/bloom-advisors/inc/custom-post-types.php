<?php
/**
 * Custom Post Types and Taxonomies
 */

// Register Case Studies / Projects CPT
function bloom_register_post_types() {
    register_post_type('case_study', array(
        'labels' => array(
            'name'               => 'Case Studies',
            'singular_name'      => 'Case Study',
            'add_new'            => 'Add New Case Study',
            'add_new_item'       => 'Add New Case Study',
            'edit_item'          => 'Edit Case Study',
            'view_item'          => 'View Case Study',
            'all_items'          => 'All Case Studies',
            'search_items'       => 'Search Case Studies',
        ),
        'public'             => true,
        'has_archive'        => true,
        'rewrite'            => array('slug' => 'projects'),
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon'          => 'dashicons-portfolio',
        'show_in_rest'       => true,
    ));

    // Register Services CPT
    register_post_type('service', array(
        'labels' => array(
            'name'               => 'Services',
            'singular_name'      => 'Service',
            'add_new'            => 'Add New Service',
            'add_new_item'       => 'Add New Service',
            'edit_item'          => 'Edit Service',
            'view_item'          => 'View Service',
            'all_items'          => 'All Services',
        ),
        'public'             => true,
        'has_archive'        => false,
        'rewrite'            => array('slug' => 'services'),
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'page-attributes'),
        'menu_icon'          => 'dashicons-admin-tools',
        'show_in_rest'       => true,
    ));

    // Register Team Members CPT
    register_post_type('team_member', array(
        'labels' => array(
            'name'               => 'Team Members',
            'singular_name'      => 'Team Member',
            'add_new'            => 'Add New Member',
            'add_new_item'       => 'Add New Team Member',
            'edit_item'          => 'Edit Team Member',
            'all_items'          => 'All Team Members',
        ),
        'public'             => true,
        'has_archive'        => false,
        'rewrite'            => array('slug' => 'team'),
        'supports'           => array('title', 'thumbnail', 'excerpt'),
        'menu_icon'          => 'dashicons-groups',
        'show_in_rest'       => true,
    ));

    // Sector Taxonomy for Case Studies
    register_taxonomy('sector', 'case_study', array(
        'labels' => array(
            'name'          => 'Sectors',
            'singular_name' => 'Sector',
        ),
        'public'            => true,
        'hierarchical'      => true,
        'rewrite'           => array('slug' => 'sector'),
        'show_in_rest'      => true,
    ));
}
add_action('init', 'bloom_register_post_types');

// Add custom meta boxes for Team Members
function bloom_team_meta_boxes() {
    add_meta_box('team_details', 'Team Member Details', 'bloom_team_meta_callback', 'team_member', 'normal', 'high');
}
add_action('add_meta_boxes', 'bloom_team_meta_boxes');

function bloom_team_meta_callback($post) {
    wp_nonce_field('bloom_team_meta', 'bloom_team_nonce');
    $role = get_post_meta($post->ID, '_team_role', true);
    $linkedin = get_post_meta($post->ID, '_team_linkedin', true);
    ?>
    <p>
        <label for="team_role"><strong>Role / Title:</strong></label><br>
        <input type="text" id="team_role" name="team_role" value="<?php echo esc_attr($role); ?>" style="width:100%;">
    </p>
    <p>
        <label for="team_linkedin"><strong>LinkedIn URL:</strong></label><br>
        <input type="url" id="team_linkedin" name="team_linkedin" value="<?php echo esc_url($linkedin); ?>" style="width:100%;">
    </p>
    <?php
}

function bloom_save_team_meta($post_id) {
    if (!isset($_POST['bloom_team_nonce']) || !wp_verify_nonce($_POST['bloom_team_nonce'], 'bloom_team_meta')) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (isset($_POST['team_role'])) update_post_meta($post_id, '_team_role', sanitize_text_field($_POST['team_role']));
    if (isset($_POST['team_linkedin'])) update_post_meta($post_id, '_team_linkedin', esc_url_raw($_POST['team_linkedin']));
}
add_action('save_post_team_member', 'bloom_save_team_meta');
