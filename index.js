const btns = document.querySelectorAll('.btn')
const white = document.querySelector('.white')
const space = document.querySelector('.space')
const color = document.querySelector('#color')

const img = document.querySelector('#img')
const price = document.querySelector('[data-org]')
const org_price = 1999

space.onclick = () => {
    color.innerHTML = 'Space Gray'
    img.src = 'https://meilleurordinateur.com/wp-content/uploads/2020/09/meilleurordinateur_apple_macbook_pro_touch_bar_16_retina_intel_core_i7_9c3a8me_gc3a9nc3a9ration_c3a0_2_6_ghz_16_go_ram_512_go_ssd_argent_nouveau_33829.jpg';
    space.classList.add('active')
    white.classList.add('noactive')
}
white.onclick = () => {
    color.innerHTML = 'White'
    img.src = 'https://img1.cgtrader.com/items/146782/04e41db963/large/apple-macbook-pro-3d-model-obj-3ds-fbx-c4d.jpg'
    white.classList.remove('noactive')
    space.classList.remove('active')
}
btns.forEach(btn => {
    const addPrice = +btn.getAttribute('data-price')
    btn.onclick = () => {
        btns.forEach(btn => btn.classList.remove('btn_active'))
        btn.classList.add('btn_active')
        price.innerHTML = '$' + (org_price + addPrice);
        
    }
});