from goprocam import GoProCamera, constants
import time
import shutil
import glob

go_pro = GoProCamera.GoPro()

go_pro.delete("last")
go_pro.shoot_video(5)
go_pro.downloadAll()

# ======== RECUPERER TT LES FICHIERS
files = glob.glob("*.mp4")

# ======== DEPLACER LES VIDEOS DANS LE DOSSIER VIDEOS
shutil.move(files, "../videos/")
