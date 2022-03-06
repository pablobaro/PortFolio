(function(window, undefined) {
  var dictionary = {
    "6dad2bde-c201-4062-b71b-df1c218e9e69": "SeeMainProjectThirdTask",
    "a8962cf2-7a16-4a09-80d1-38a00f3f1929": "SeeProject",
    "740fc06d-544a-41ab-803b-cbf32ef3fc0a": "SeeMainProjectThirdTaskPlusSecond",
    "953ed244-b41f-44cc-9e76-482d695699fc": "AboutUs",
    "7b1cb73a-23a8-44ee-ad92-ed1c96489542": "SeeMainProject",
    "9b024a9b-7bbd-4c42-b526-10684a91b1ec": "SeeMainProjectThirdTaskDone",
    "e41d8254-1ecf-4fd5-866e-de70b7afc9a4": "Home",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);