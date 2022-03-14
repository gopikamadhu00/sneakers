function bucketlist() {
  if (localStorage.length > 0) {
    var retrievedData = localStorage.getItem("mydata");
    var myArray1 = JSON.parse(retrievedData);
    document.getElementById("cartImg").style.display = "block";

    document.getElementById("cartImg").style.background = "#FF7E1B";
    document.getElementById("cartImg").innerHTML = myArray1[3];
    document.getElementById("checkOut").style.display = "block";
    document.getElementById("dltbtn").style.display = "block";
    document.getElementById("ecart").style.display = "none";
    document.getElementById("imgg").style.display = "block";
    document.getElementById("title").style.display = "block";
  } else {
    document.getElementById("ecart").style.display = "block";
    document.getElementById("cartImg").style.display = "none";
    document.getElementById("checkOut").style.display = "none";
    document.getElementById("dltbtn").style.display = "none";
  }
}
bucketlist();
// function changeImage(src) {
//   document.getElementById("myBtn").src = src;
// }

function cartOpen() {
  var cart = document.getElementById("cart");
  if (cart.style.display !== 'none') {
      cart.style.display = 'none';
  } else {
      cart.style.display = 'block';
  }
}

function changeImage(src,id) {
  console.log('hiii')
  var cimage = document.getElementById('cimage');
  console.log(cimage,'ciamge')
  cimage.style.opacity = 1;
  var thumbnails = document.getElementById('thumbnails');
  var asd =thumbnails.querySelectorAll('.small-img-col')
  asd.forEach(element => {
    element.style.border = 'none';
    element.childNodes[1].style.opacity = 1
  });
 
  cimage.parentElement.style.border ='none';
  current_cimage = document.getElementById(id);
  current_cimage.style.opacity = '25%';
  current_cimage.parentElement.style.border = '2px solid #FF7E1B';
  document.getElementById("myBtn").src = src;
}
// js for toggle menu

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle(src) {
  var base_url = window.location.origin;
  console.log(document.getElementById("closebtn").src);
  if (
    document.getElementById("closebtn").src ==`${base_url}/assets/icon-menu.svg`
  ) {
    document.getElementById("closebtn").src = "assets/icon-close.svg";
  }
   else {
    document.getElementById("closebtn").src = "assets/icon-menu.svg";
  }
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "900px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

function changeborber(ID) {
  var childImages = document.getElementById("thumbnails").children;
  var i;
  for (i = 0; i < childImages.length; i++) {
    childImages[i].style.border = "";
    childImages[i].style.opacity = "";
  }
  document.getElementById(ID).style.border = "2px solid #FF7E1B";
  document.getElementById(ID).style.opacity = "25%";
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};


span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var slideIndex = 1;
      showSlides(slideIndex);
      
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
      }
// Demo
var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active";
}


// Add to cart Starts
var addItemId = 0;

function storeLoc() {
  var myArray = [];
  var cart_img = document.getElementById("cimage");
  myArray.push(cart_img.src);

  var cprice = document.getElementById("product_price").innerHTML;
  myArray.push(cprice);

  var cdescription = document.getElementById("product_title").innerHTML;
  myArray.push(cdescription);

  var ccount = document.querySelector("#quantity").value;
  myArray.push(ccount);
  localStorage.setItem("mydata", JSON.stringify(myArray));
  addToCart();
}

function addToCart() {
  var retrievedData = localStorage.getItem("mydata");
  var myArray1 = JSON.parse(retrievedData);

  document.getElementById("imgg").src = myArray1[0];
  document.getElementById("title").innerHTML = myArray1[2];
  myArray1[1] = myArray1[1].replace(/\$/g, "");
  var total = myArray1[1] * myArray1[3];
  document.getElementById(
    "totalprice"
  ).innerHTML = `$${myArray1[1]} x ${myArray1[3]} $${total}.00`;
}

function clearCart() {
  localStorage.removeItem("mydata");
  document.getElementById("totalprice").innerHTML = "";
  document.getElementById("imgg").style.display = "none";
  document.getElementById("checkOut").style.display = "none";
  document.getElementById("dltbtn").style.display = "none";
  document.getElementById("title").style.display = "none";
}

// function cartOpen() {
//   var cart = document.getElementById("cart");
//   if (cart.style.display !== "none") {
//     cart.style.display = "none";
//   } else {
//     cart.style.display = "block";
//   }
// }

// quantity counter
var valueCount;
document.querySelector(".plus-btn").addEventListener("click", function () {
  valueCount = document.getElementById("quantity").value;
  valueCount++;

  document.getElementById("quantity").value = valueCount;
});

document.querySelector(".minus-btn").addEventListener("click", function () {
  valueCount = document.getElementById("quantity").value;
  valueCount--;
  if (valueCount <= 1) {
    valueCount = 1;
  }
  document.getElementById("quantity").value = valueCount;
});
