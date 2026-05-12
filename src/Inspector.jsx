
import { EdgeTypePickerComponent, InspectorComponent, ColorPickerComponent } from "@visuallyjs/browser-ui-react"
import { Node, Edge } from "@visuallyjs/browser-ui"
import {
    PROPERTY_FILL,
    PROPERTY_LABEL,
    PROPERTY_OUTLINE
} from "./constants.ts";

export default function ERDInspector() {

    return <InspectorComponent className="vjs-erd-inspector">
        {(current) => <>
            { current?.objectType === Node.objectType && <>
                <label>Label</label>
                <input type="text" vjs-att={PROPERTY_LABEL} vjs-focus="true"/>

                <div className="vjs-inspector-type">Type: {current.type}</div>

                <label>Fill Color</label>
                <ColorPickerComponent  propertyName={PROPERTY_FILL}/>

                <label>Outline Color</label>
                <ColorPickerComponent propertyName={PROPERTY_OUTLINE}/>
            </>}

            {current?.objectType === Edge.objectType && <>
                <label>Markers</label>
                <EdgeTypePickerComponent propertyName="type"/>
            </>}

        </>}
    </InspectorComponent>
}
