function showCart(){
  let popup = document.getElementById("popup-cart")
  let blocker = document.getElementById("blocker")
  popup.style.visibility = 'visible'
  popup.style.opacity = '1'
  blocker.style.visibility = 'visible'
  blocker.style.opacity = '1'
}

function hideCart(){
  let popup = document.getElementById("popup-cart")
  let blocker = document.getElementById("blocker")
  popup.style.visibility = 'hidden'
  popup.style.opacity = '0'
  blocker.style.visibility = 'hidden'
  blocker.style.opacity = '0'
}

let triggerShowCart = document.getElementById('cart')
triggerShowCart.addEventListener('click', showCart)

let triggerHideCart = document.getElementById('blocker')
triggerHideCart.addEventListener('click', hideCart)

function showProfile(){
  let popup = document.getElementById("popup-profile")
  let blocker = document.getElementById("blocker")
  popup.style.visibility = 'visible'
  popup.style.opacity = '1'
  blocker.style.visibility = 'visible'
  blocker.style.opacity = '1'
}

function hideProfile(){
  let popup = document.getElementById("popup-profile")
  let blocker = document.getElementById("blocker")
  popup.style.visibility = 'hidden'
  popup.style.opacity = '0'
  blocker.style.visibility = 'hidden'
  blocker.style.opacity = '0'
}

let triggerShowProfile = document.getElementById('profile')
triggerShowProfile.addEventListener('click', showProfile)

let triggerHideProfile = document.getElementById('blocker')
triggerHideProfile.addEventListener('click', hideProfile)

function createElementInside(src, text_list){
  let root = document.getElementById('container')

  let div_overlay = document.createElement('div')
  div_overlay.classList.add('overlay-container')

  let img = document.createElement('img')
  img.classList.add('background-image')
  img.src = src
  img.alt = ''

  let div_up = document.createElement('div')
  div_up.classList.add('purchase-box-up')

  let div_up_in = document.createElement('div')
  let text = ''
  for (let _text in text_list){
    if(text !== '') text += '<br/>'
    text += text_list[_text]
  }
  div_up_in.innerHTML = text

  div_up.appendChild(div_up_in)

  let div_purchase = document.createElement('div')
  if(text_list.length === 1) div_purchase.classList.add('purchase-box1')
  else if(text_list.length === 3) div_purchase.classList.add('purchase-box3')
  else div_purchase.classList.add('purchase-box')

  let div_purchase_in = document.createElement('div')
  div_purchase_in.innerHTML = 'PURCHASE'

  div_purchase.appendChild(div_purchase_in)

  div_overlay.appendChild(img)
  div_overlay.appendChild(div_up)
  div_overlay.appendChild(div_purchase)

  root.appendChild(div_overlay)
}

function createElementOverlay(src, text_list, rootID){
  let root = document.getElementById(rootID)

  let img = document.createElement('img')
  img.classList.add('background-image')
  img.src = src
  img.alt = ''

  let div_up = document.createElement('div')
  div_up.classList.add('purchase-box-up')

  let div_up_in = document.createElement('div')
  let text = ''
  for (let _text in text_list){
    if(text !== '') text += '<br/>'
    text += text_list[_text]
  }
  div_up_in.innerHTML = text

  div_up.appendChild(div_up_in)

  let div_purchase = document.createElement('div')
  if(text_list.length === 1) div_purchase.classList.add('purchase-box1')
  else if(text_list.length === 3) div_purchase.classList.add('purchase-box3')
  else div_purchase.classList.add('purchase-box')

  let div_purchase_in = document.createElement('div')
  div_purchase_in.innerHTML = 'PURCHASE'

  div_purchase.appendChild(div_purchase_in)

  root.appendChild(img)
  root.appendChild(div_up)
  root.appendChild(div_purchase)
}

let path = window.location.pathname;
let page = path.split("/").pop();

let page_list = ['index.html', 'firearms.html', 'ammo.html', 'optics.html', 'suppressors.html']
let firearms_list = ['img/Firearms/ISO%2045%20Poly%20Gold.jpg', "img/Firearms/TAQ%20M%20Shadow.jpg", "img/Firearms/ISO%209.png", "img/Firearms/Tempus%20Razorback.jpg", "img/Firearms/ISO%2045%20Shadow.jpg"]
let ammo_list = ["img/Ammo/Overpressured_+P.jpg", "img/Ammo/Frangible.jpg", "img/Ammo/Hollowpoint.jpg", "img/Ammo/Armor_piercing.jpg", "img/Ammo/Armor_piercing1.jpg", "img/Ammo/Frangible1.jpg", "img/Ammo/High_Velocity.jpg", "img/Ammo/Hollowpoint1.jpg", "img/Ammo/Overpressured_+P1.jpg"]
let optics_list = ['img/Optics/Cronen_Mini_Pro.jpg', 'img/Optics/Hybrid_Firepoint.jpg', 'img/Optics/SZ_Holotherm.jpg', 'img/Optics/SZ_Lonewolf.jpg', 'img/Optics/XRK_On-Point.jpg']
let suppressors_list = ['img/Suppressors/Harbinger_D20.jpg', 'img/Suppressors/FSS_Covert_V.jpg', 'img/Suppressors/Expedite_EXF_Huntress-90.jpg', 'img/Suppressors/Xten_RR-40.jpg', 'img/Suppressors/Silentfire_XG6.jpg', 'img/Suppressors/FSS_Kavert_4.jpg', 'img/Suppressors/Echoline_GS-X.jpg', 'img/Suppressors/Broadhead_3DP.jpg']

let firearms_list_text = [['Poly Gold', 'ISO 45'], ['Shadow', 'TAQ M'], ['ISO 9'], ['Tempus', 'Razorback'], ['Shadow', 'ISO 45']]
let ammo_list_text = [['OVERPRESSURED', '+P', '.300BLK'], ['FRINGICLE', '.300BLK'], ['HOLLOWPOINT', '.300BLK'], ['ARMOR', 'PIERCING', '.300BLK'], ['ARMOR', 'PIERCING', '9mm'], ['FRINGICLE', '9 mm'], ['HIGH', 'VELOCITY', '9 mm'], ['HOLLOWPOINT', '9 mm'], ['OVERPRESSURED', '+P', '9 mm']]
let optics_list_text = [['Cronen', 'Mini Pro'], ['XTEN', 'Hybrid', 'Firepoint'], ['SZ', 'Holotherm'],['SZ', 'Lonewolf'], ['XRK', 'On-Point']]
let suppressors_list_text = [['Harbinger', 'D20'], ['FSS', 'Covert V'], ['Expedite', 'EXF', 'Huntress-90'], ['XTEN', 'RR-40'], ['Silentfire', 'XG6'], ['FSS', 'Covert 4'], ['Echoline', 'GS-X'], ['Broadhead', '3DP']]

let current_list, current_list_text
let isIndex = false

switch (page) {
  case 'firearms.html': current_list = firearms_list; current_list_text = firearms_list_text; break
  case 'ammo.html': current_list = ammo_list; current_list_text = ammo_list_text; break
  case 'optics.html': current_list = optics_list; current_list_text = optics_list_text; break
  case 'suppressors.html': current_list = suppressors_list; current_list_text = suppressors_list_text; break
  default: isIndex = true
}

for(let current in current_list){
  if(current === '0'){
    createElementOverlay(current_list[current], current_list_text[current], 'overlay-container')
  }else if(current === (current_list.length - 1).toString()){
    createElementOverlay(current_list[current], current_list_text[current], 'bottom-container')
  }else{
    createElementInside(current_list[current], current_list_text[current])
  }
}


