var typed = new Typed('.hello', {
    strings: [
      "Programmer", 
      "Web desinger",
      "Developer",
      "Freelancer"
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop : true
  });
  AOS.init({
    duration: 1000,
    offset : 100
  })
  var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    nav:false,
    mouseDrag:true
  });