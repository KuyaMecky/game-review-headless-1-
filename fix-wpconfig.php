<?php
$file = '/www/wwwroot/pagcorcasino.ph/wp-config.php';
$content = file_get_contents($file);

// Remove any broken proxy lines we added before
$content = preg_replace('/\n*\/?\*?\*? ?Proxy and Cloudflare.*?FORCE_SSL_ADMIN.*?;\n*/s', "\n", $content);
$content = preg_replace('/n\*\* Proxy.*?FORCE_SSL_ADMIN.*?;\n*/s', '', $content);
$content = preg_replace('/if \(isset\(\[.*?FORCE_SSL_ADMIN.*?;\n*/s', '', $content);

// Add correct proxy detection after the "custom values" comment
$marker = '/* Add any custom values between this line and the "stop editing" line. */';
$insert = $marker . "\n\n" . '/** Proxy and Cloudflare HTTPS detection */' . "\n"
    . 'if (isset($_SERVER[\'HTTP_X_FORWARDED_PROTO\']) && $_SERVER[\'HTTP_X_FORWARDED_PROTO\'] === \'https\') {' . "\n"
    . '    $_SERVER[\'HTTPS\'] = \'on\';' . "\n"
    . '}' . "\n"
    . 'define(\'FORCE_SSL_ADMIN\', true);' . "\n";

$content = str_replace($marker, $insert, $content);

file_put_contents($file, $content);
echo "wp-config.php updated successfully\n";
