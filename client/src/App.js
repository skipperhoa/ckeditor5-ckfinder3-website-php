import logo from './logo.svg';
import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ))
function App() {
  return (
    <div className="App">
       <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    config={{
                        ckfinder: {
                            // Upload the images to the server using the CKFinder QuickUpload command.
                            uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
                            // Define the CKFinder configuration (if necessary).
                            options: {
                                resourceType: 'Images'
                            }
                        },
              
                      toolbar: [ 'Essentials', 'CKFinderUploadAdapter', 'Autoformat', 'Bold', 'Italic', 'BlockQuote', 'CKBox', 'CKFinder', 'CloudServices', 'EasyImage', 'Heading', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'Indent', 'Link', 'List', 'MediaEmbed', 'Paragraph', 'PasteFromOffice', 'PictureEditing', 'Table', 'TableToolbar', 'TextTransformation' ],
                      heading: {
                          options: [
                              { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                              { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                              { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                          ]
                      }
                    }}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
    </div>
  );
}

export default App;
