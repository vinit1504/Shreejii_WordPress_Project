<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'shreejii_wp420' );

/** Database username */
define( 'DB_USER', 'shreejii_wp420' );

/** Database password */
define( 'DB_PASSWORD', 'S3(pL07!03' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ny47wytdiuhdh5z02cimnex7puatvi2jhl9egirf1mdjtscql9bgaq7z7ejbwh4l' );
define( 'SECURE_AUTH_KEY',  'b70hiup9j2pnx6ozjtk8h2frwgxpcwpvledlfa0snjwx7kn1isekbcyxokobvupl' );
define( 'LOGGED_IN_KEY',    'yhtidug3ca2nzz0cspu0cv52vamus66xhh4lr9jv7xnzxsq7cz1tv4ebl7y0vdzq' );
define( 'NONCE_KEY',        'kzimqkdrmuphkswpyhzxdcfvvbjosrxsbqzd48ejug7jxde43zlgkliji8w5xwed' );
define( 'AUTH_SALT',        'sjvdohuwzjlxdbw7u20v3xztvlhjof3f5kahfc5gdsghtarm7rbbtv7wlzapj3nz' );
define( 'SECURE_AUTH_SALT', 'ztad6dai3qq1kt7zocg2mxalccikokmrrpjs3q3vbxqoxjj9mz3fzaqypebnbh2b' );
define( 'LOGGED_IN_SALT',   'fe9nhttc1vzwrbpy982xzux72eobuzi6ul9iubsprnh4uxxk4mzwtdzuveftcapy' );
define( 'NONCE_SALT',       'ykomtd4crq3fvoj00ziaqlok8oamnqjo3fo6ieoibwy9prfwg1jgfib5cbqn1xyz' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpu6_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
