<?php
// EXECUTER LE SCRIPT
exec("py ./python/shoot.py");

// ==================== METHODE 1 ====================
// ==================== TROP LONG ====================
// $videos = glob("*.mp4");
// foreach ($videos as $video) {
//   echo $video;
// }
// ==================== METHODE 1 ====================

// ====================== METHODE 2 ======================
// recuperer les fichiers mp4
$myarray = glob("*.MP4");
// afficher les videos par date de creation (plus recent en premier)
function monTri($a, $b)
{
  return filemtime($b) - filemtime($a);
};
usort($myarray, "monTri");

print_r($myarray);
// var_dump($myarray);
// print($myarray);
// ====================== METHODE 2 ======================


// header('Location: index.php');
