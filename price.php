<?php 
$url1='https://api.coingecko.com/api/v3/simple/price?ids=help-the-homeless-coin&vs_currencies=USD';
$json1 = file_get_contents($url1);
$data = json_decode($json1, true);
echo ('{"hth":{"usd":');
echo ( $data['help-the-homeless-coin']['usd'] );
echo ('}}');
?>