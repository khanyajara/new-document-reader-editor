import * as React from 'react';
import './App.css'
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);

function App() {
    return (
    <DocumentEditorContainerComponent
    className="container"
    style={{ height: '1000px', width: '100%' }}
    serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
    enableToolbar={true}
/>
);
}
export default App;