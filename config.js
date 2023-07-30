import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285760451683', 'Zeltoria', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285892928715'
global.author = '© Danzz-Xd'
global.namebot = '​DANZZ - BOTZ'
global.wm = '© Danzz-Botz By Dani'
global.stickpack = 'DANZZ - BOTZ'
global.stickauth = '© AhmadRamaDani'
// Link Sosmed
global.sig = 'https://www.instagram.com/danilelistz02'
global.sgh = 'https://github.com/AhmadRamaDani'
global.sgc = 'https://chat.whatsapp.com/JLPXgJKp0eo7EC8Yknvn7J'
// Donasi
global.psaweria = 'https://saweria.co/Zeltoria'
global.ptrakterr = 'https://trakteer.id/zeltoria'
global.povo = '085-8929-287151'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = '4POxPtADnc'
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk..
// Mendapatkan Apikey Kamu

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

