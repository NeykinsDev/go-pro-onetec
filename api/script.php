<?php
// EXECUTER LE SCRIPT
exec("py ./python/shoot.py");

// $files = glob("*.mp4");
// foreach ($files as $file) {
//   echo $file;
// }
$items = glob("*.mp4", GLOB_NOSORT);
array_multisort(array_map('filemtime', $items), SORT_NUMERIC, SORT_DESC, $items);

// basename($items);

// header('Location: index.php');           
