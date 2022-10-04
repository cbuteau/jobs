define('src/Commons', [], function() {


    var usedIds = [];

    function getId() {
      return '' + Math.random().toString(36).substr(2, 9);
    }
 
    function getUniqueId() {
      var id = getId();
      while(usedIds.indexOf(id) !== -1) {
        id = getId();
      }
      usedIds.push(id);
 
      return id;
    }


    return {
        getUniqueId: getUniqueId
    }
})