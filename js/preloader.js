window.onload = function() {
    let preloader = document.getElementById('page_preloader');
    preloader.style.display = 'none';
    window.scrollTo({ top: 0 })
}



// window.addEventListener('scroll', e => {
//     window.scrollTo({top: 0})
//   })

// var preloader = document.getElementById('page_preloader');

// document.body.onload = function() {
//     setTimeout(function() {
//         if (!preloader.classList.contains('done')) {
//             preloader.classList.add('done');
//         }
//     }, 1000);
// }