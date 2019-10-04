$(document).ready(()=>{
    var options = {
/*       url: "FirebaseController/autocompleteUsers",
      getValue: "Nombre", */
      data: ["blue", "green", "pink", "red", "yellow"],
      list: {
        match: {
          enabled: true
        },
        maxNumberOfElements: 10
      }
    };
    $("#userSearch").easyAutocomplete(options);
});