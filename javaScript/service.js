function Display(id) {
  var choice = id;
  var img = document.getElementsById(id);
  switch (choice) {
    case "img1":{
      img.src = "Images/WhiteAudi.webp";
      img.style.display = "flex";
      break;}
    case "img2":{
      img.src = "Images/BlackAudi.webp";
      img.style.display = "flex";
      break;}
    case "img3":{
      img.src = "Images/greyAudi.webp";
      img.style.display = "flex";
      break;}
    case "img4":{
      img.src = "Images/SevellicAudi.webp";
      img.style.display = "flex";
      break;}
    case "img5":{
      img.src = "Images/FirmanentblueAudi.webp.webp";
      img.style.display = "flex";
      break;}
  }
}