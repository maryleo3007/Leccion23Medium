function createHtml(parent){

  var df = document.createDocumentFragment();
    var header = document.createElement("header");
    header.setAttribute("class","header-medium");

    var divlogo = document.createElement("div");
    divlogo.setAttribute("class","header-logo");

    var spanmedium = document.createElement("span");
    spanmedium.setAttribute("icon-medium");

    var a1 = document.createElement("a");
    a1.setAttribute("href","https://medium.com/laboratoria-how-to/hazlo-con-estilo-tipograf%C3%ADas-iconos-y-sprite-5a036a7b592a");

    var divseparete = document.createElement("div");
    divseparete.setAttribute("class","header-height-separete");

    var imglogo = document.createElement("img");
    imglogo.setAttribute("src","https://cdn-images-1.medium.com/letterbox/95/36/50/50/1*_ihRFL7e2SnYNEJcLeul4g.png?source=logoAvatar-lo_d71ea9bf7a58---c0d34b54fadb");

    var divsocial= document.createElement("div");
    divsocial.setAttribute("class","header-social");

    var divsingin = document.createElement("div");
    divsingin.setAttribute("class","header-singin");

    var btnfollow = document.createElement("button");
    btnfollow.setAttribute("class","follow");

    var spansocial1 = document.createElement("span");
    spansocial1.setAttribute("class","icon-twitter-square");

    var spansocial2 = document.createElement("span");
    spansocial2.setAttribute("class","icon-facebook-square");

    var spansignin = document.createElement("span");
    var asingin = document.createElement("a");
    var textsingin = document.createTextNode("Sing in/ Sing up");

    parent.appendChild(header);
    header.appendChild(divlogo);
    header.appendChild(divsocial);
    header.appendChild(divsingin):

    divlogo.appendChild(spanmedium);
    divlogo.appendChild(divseparete);
    divlogo.appendChild(imglogo);

    spanmedium.appendChild(a1);

    divsocial.appendChild(btnfollow);
    divsocial.appendChild(spansocial1);
    divsocial.appendChild(spansocial2);

    divsingin.appendChild(spansignin);
    spansignin.appendChild(asingin);

    asingin.appendChild(textsingin);


    var section = document.createElement("section");
    section.setAttribute("class","content-general");

    var divpost = document.createElement("div");
    divpost.setAttribute("class","contet-poster");

    var article = document.createElement("article");
    var article.setAttribute("class","article-post");

    parent.appendChild(section);
    section.appendChild(divpost);
    section.appendChild(article);

    var divphoto = document.createElement("div");
    divphoto.setAttribute("class","photo-poster");

    var imgphoto = document.createElement("img");
    img.setAttribute("src","https://cdn-images-1.medium.com/fit/c/60/60/1*nKNkprMb5nGdZlciB-qwxA.jpeg");

    divpost.appendChild(divphoto);
    divphoto.appendChild(img);

    var divinformationposter = document.createElement("div");
    divinformationposter.setAttribute("class","information-poster");
    var divnameposter = document.createElement("div");
    divnameposter.setAttribute("class","name-poster");

    var div = document.createElement("div");
    div.setAttribute("class","box-img");
    var a = document.createElement("a");
    a.setAttribute("href","#img"+i);
    var img = document.createElement("img");
    img.setAttribute("src","assets/img/img-"+i+".jpg");
    img.setAttribute("class","img-work");
    var p = document.createElement("p");
    var texto = document.createTextNode("Nombre de Proyecto");
    p.appendChild(texto);

    div.appendChild(a);
    a.appendChild(img);
    a.appendChild(p);

    df.appendChild(div);

  parent.appendChild(df);
}
