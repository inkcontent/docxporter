importScripts('./inkapi.js');
importScripts('./html-docx.js');

INKAPI.ready(() => {
  const UI = INKAPI.ui;

  //your code here
  UI.menu.addMenuItem(clickHandler, "File", "Export", "as Docx");

});

async function clickHandler() {

  //do something on menu click
  const Editor = INKAPI.editor;
  const IO = INKAPI.io;

  const htmlString = await Editor.getHTML(); //retrieve editor content in docx format.
  const converted = await htmlDocx.asBlob(htmlString).arrayBuffer();

  IO.saveFile(converted, 'docx');  //open save dialog with only docx file extension

}