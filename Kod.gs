function doGet(){
  return HtmlService.createTemplateFromFile("page").evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}
