import {
    ControlsComponent,
    DiagramProvider, DiagramComponent, DiagramPaletteComponent
} from "@visuallyjs/browser-ui-react"

import renderOptions from './render-options'
import {useEffect, useRef} from "react";
import ERDInspector from "./Inspector.jsx";
import {erdShapes} from "./erd-shapes.ts";
function App({url, hidePalette, hideInspector}) {

    const diagram = useRef(null)

    useEffect(() => {
        window.d = diagram.current
    }, []);

  return <div className="vjs-erd">
      <DiagramProvider>
          <div className="vjs-erd-canvas">
              <DiagramComponent options={renderOptions} url={url} ref={diagram}>
                  <ControlsComponent orientation="column"/>
              </DiagramComponent>
              {hideInspector !== true && <ERDInspector/>}
          </div>
          {hidePalette !== true && <div className="vjs-erd-palette">
              <DiagramPaletteComponent preparedShapes={erdShapes} showLabels={true}/>
          </div>}
      </DiagramProvider>
  </div>
}

export default App
