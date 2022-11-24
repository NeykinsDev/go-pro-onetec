<?php
// EXECUTER LE SCRIPT
exec("py ./python/shoot.py");

// $files = glob("*.mp4");
// foreach ($files as $file) {
//   echo $file;
// }

// recuperer les fichiers mp4
$myarray = glob("*.mp4");
// afficher les videos par date de creation (plus recent en premier)
function monTri($a, $b)
{
  return filemtime($b) <=> filemtime($a);
};
usort($myarray, "monTri");


// header('Location: index.php');
