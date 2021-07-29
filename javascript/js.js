
var prop = ["appearance","atomic_mass","number","boil","category","color","density","melt","molar_heat","ionization_energies"];
var otherprop = ["period","phase","symbol","shells","electron_configuration","electron_affinity","electronegativity_pauling"];
var discovery_info = ["discovered_by","named_by"];
$(function(){
  $(".searchContainer").addClass("showem");
  $(".search").on("click",search);
  
});
function search(){
      
    var element = $(".searchBar").val();
    element = element[0].toUpperCase() + element.slice(1)
   if(element !=="" && element!==undefined){
   $(".searchContainer").removeClass("showem");  
  $(".searchContainer").addClass("remove"); 
  setTimeout(()=>{
/*********************************************/  
$.getJSON('https://chemistrydata.herokuapp.com/elements/'+element, function(data) {     
var info = $(".info");
var properties = $(".properties");
var other = $(".otherprop");
var summary = $(".summary");
var discovery = $(".discovery");
 $(".info").removeClass("remove");
$(".info").addClass("showem");
$(".search1").removeClass("remove");
$(".search1").addClass("showem");
document.getElementsByClassName("properties")[0].innerHTML="";
document.getElementsByClassName("otherprop")[0].innerHTML="";
document.getElementsByClassName("summary")[0].innerHTML="";
document.getElementsByClassName("discovery")[0].innerHTML="";

if(data["summary"]!==null){
    summary.append(data["summary"]);
} ;
for(let i in prop){
if(data[prop[i]]!==null){
if(data[prop[i]]!==undefined){
    properties.append(prop[i]+" : "+ "<span>"+data[prop[i]]+"</span><br>");
}
else{
    document.getElementsByClassName("properties")[0].innerHTML="Error 404 Page Not Found";
}
};
};

for(let i in otherprop){
if(data[otherprop[i]]!==null){
if(data[otherprop[i]]!==undefined){
    other.append(otherprop[i]+" : "+ "<span>"+data[otherprop[i]]+"</span><br>");
}
else{
    document.getElementsByClassName("otherprop")[0].innerHTML="Error 404 Page Not Found";
}

};
};

for(let i in discovery_info){
if(data[discovery_info[i]]!==null){
if(data[discovery_info[i]]!==undefined){
    discovery.append(discovery_info[i]+" : "+ "<span>"+data[discovery_info[i]]+"</span><br>");
}
else{
    document.getElementsByClassName("discovery")[0].innerHTML="Error 404 Page Not Found";
    
};

};
};


}); 




/*********************************************/  
},50);
}; 

    
};
function searcher(){
    $(".info").removeClass("showem");
    $(".info").addClass("remove");
    $(".search1").removeClass("showem");
    $(".search1").addClass("remove");
    $(".searchContainer").removeClass("remove");
    $(".searchContainer").addClass("showem");
    
}
  