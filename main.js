menu_list_array_veg = ["<button class='btn btn-success' onclick='vm()'>Veg Margherita Pizza</button>",
                   "<button class='btn btn-success' onclick='pp()'>Peppy Paneer Pizza</button>",
                   "<button class='btn btn-success' onclick='fh()'>Farm house Pizza</button>",
                   "<button class='btn btn-success' onclick='mg()'>Mexican Green Wave</button>",
                   "<button class='btn btn-success' onclick='dv()'>Deluxe Veggie</button>",
                   "<button class='btn btn-success' onclick='ve()'>Veg Extravaganza</button>",
                   "<button class='btn btn-success' onclick='cc()'>CHEESE N CORN</button>",
                   "<button class='btn btn-success' onclick='pm()'>PANEER MAKHANI</button>",
                   "<button class='btn btn-success' onclick='vp()'>VEGGIE PARADISE</button>",
                   "<button class='btn btn-success' onclick='fv()'>FRESH VEGGIE</button>",
                   "<button class='btn btn-success' onclick='itp()'>Indi Tandoori Paneer</button>",
                   ];
menu_list_array_non_veg = ["<button class='btn btn-danger' onclick='pbc()'>PEPPER BARBECUE CHICKEN</button>",
                           "<button class='btn btn-danger' onclick='cs()'>CHICKEN SAUSAGE</button>",
                           "<button class='btn btn-danger' onclick='cgd()'>Chicken Golden Deligth</button>",
                           "<button class='btn btn-danger' onclick='nvs()'>Non Veg Supreme</button>",
                           "<button class='btn btn-danger' onclick='cd()'>Chicken Dominator</button>",
                           "<button class='btn btn-danger' onclick='pbo()'>PEPPER BARBECUE & ONION</button>",
                           "<button class='btn btn-danger' onclick='cf()'>CHICKEN FIESTA</button>",
                           "<button class='btn btn-danger' onclick='ict()'>Indi Chicken Tikka</button>",
                        ];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array_veg.sort();
for(var i=0;i<menu_list_array_veg.length;i++){
    htmldata=htmldata+'<li>' + menu_list_array_veg[i] + '</li>'
}
  htmldata=htmldata+"</ol>"
  document.getElementById("display_menu").innerHTML = htmldata;
}

function get_menu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array_non_veg.sort();
    for(var i=0;i<menu_list_array_non_veg.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array_non_veg[i] + '</li>'
    }
      htmldata=htmldata+"</ol>"
      document.getElementById("display_menu").innerHTML = htmldata;
    }
function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array_veg.sort();
htmldata= "<section class='cards'>"
for(var i=0;i<menu_list_array_veg.length;i++){

    htmldata=htmldata+'<div class="card">'
         +'<img src="images/pizzaImg.png">'
          +menu_list_array_veg[i] + '</div>'
}
htmldata= htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML=htmldata;
}

function add_item_1(){
    var htmldata;
    var item=document.getElementById("add_item_1").value;
    menu_list_array_non_veg.sort();
    htmldata= "<section class='cards'>"
    for(var i=0;i<menu_list_array_non_veg.length;i++){
    
        htmldata=htmldata+'<div class="card">'
             +'<img src="images/pizzaImg.png">'
              +menu_list_array_non_veg[i] + '</div>'
    }
    htmldata= htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
    }

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array_veg.push(item);
add_item();
}

function add_top_1(){
    var item=document.getElementById("add_item_1").value;
    menu_list_array_non_veg.push(item);
    add_item_1();
    }

function pbc(){
    window.location = "pbc.html";
}
function cs(){
    window.location = "cs.html";
}
function cgd(){
    window.location = "cgd.html";
}
function nvs(){
    window.location = "nvs.html";
}
function cd(){
    window.location = "cd.html";
}
function pbo(){
    window.location = "pbo.html";
}
function cf(){
    window.location = "cf.html";
}
function ict(){
    window.location = "ict.html";
}





function vm(){
    window.location = "vm.html";
}
function vmp(){
    window.location = "vmp.html";
}
function pt(){
    window.location = "pt.html";
}
function pp(){
    window.location = "pp.html";
}
function fh(){
    window.location = "fh.html";
}
function mg(){
    window.location = "mg.html";
}
function dv(){
    window.location = "dv.html";
}
function ve(){
    window.location = "ve.html";
}
function cc(){
    window.location = "cc.html";
}
function pm(){
    window.location = "pm.html";
}
function vp(){
    window.location = "vp.html";
}
function fv(){
    window.location = "fv.html";
}
function itp(){
    window.location = "itp.html";
}
