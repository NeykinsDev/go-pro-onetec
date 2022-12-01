<?php
// EXECUTER LE SCRIPT
// exec("py ./python/shoot.py");

// ==================== METHODE 1 ====================
// $videos = glob("*.mp4");
// foreach ($videos as $video) {
//   echo $video;
// }
// ==================== METHODE 1 ====================

// ====================== METHODE 2 ======================
// recuperer les fichiers mp4
$mesVideos = glob("*.MP4");
// afficher les videos par date de creation (plus recent en plus anciens)
function triDeVideos($a, $b)
{
  return filemtime($b) - filemtime($a);
};
print_r($mesVideos);
usort($mesVideos, "triDeVideos");

// foreach ($mesVideos as $key => $value) {
//   echo "$key: $value\n";
// }
// print_r($mesVideos);
// var_dump($mesVideos);
// print($mesVideos);
// ====================== METHODE 2 ======================


// header('Location: index.php');
