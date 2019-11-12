import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Hello} from './hello_component';

ReactDom.render(<Hello toWhat='world'/>,
document.getElementById('app'));