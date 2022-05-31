const card = document.querySelector('.card');
const imageZoom = document.querySelector('.image-zoom');
const cardLeft = document.querySelector('.card-left');
const cardRight = document.querySelector('.card-right');
// const cardBottom = document.querySelector('.card-bottom');


const TLanim = gsap.timeline({ paused: true });

TLanim 
.fromTo(imageZoom, {scale :1}, {scale: 2, y: 200, x:18, duration: 0.4, ease:ExpoScaleEase.config(1,2, 'power2.inOut')})


.to(card, {opacity:0, duration: 0.8}, 1)
.to(cardLeft, {top: 0, left: -450, duration: 0.1}, 0.5)
.to(cardRight, {top: 0, right: -450, duration: 0.1}, 0.8)




card.addEventListener('mouseenter', () => {
    TLanim.play();
});
card.addEventListener('mouseleave', () => {
    TLanim.reverse()
} );