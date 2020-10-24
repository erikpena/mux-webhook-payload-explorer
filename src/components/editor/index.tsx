import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"

interface Props {
  value?: string;
}

const Editor = (props:Props) => {
  return <AceEditor
    style={{flex: 1, width: undefined, height: undefined}}
    mode="json"
    theme="monokai"
    showPrintMargin={false}
    readOnly={false}
    editorProps={{ $blockScrolling: true }}
    value={props.value}
  />;
};

export default Editor;
