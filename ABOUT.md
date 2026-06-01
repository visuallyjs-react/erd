# Entity Relationship Diagram (ERD) Implementation

This document describes how the Entity Relationship Diagram (ERD) Editor is implemented using `@visuallyjs/browser-ui-react` and `@visuallyjs/browser-ui`.

## Components

The application is built using several core components from `@visuallyjs/browser-ui-react`:

- **`DiagramProvider`**: Wraps the entire application to provide context and manage the state of the ERD.
- **`DiagramPaletteComponent`**: Displays a palette of ERD elements (Tables, Views, etc.) that users can drag onto the canvas. It is configured with `erdShapes`.
- **`DiagramComponent`**: The main canvas area where the ERD is rendered.
- **`ControlsComponent`**: Provides standard zoom and pan controls, configured in a column orientation.

### Custom Components
- **`ERDInspector`**: A custom inspector for editing properties of database tables and columns.

## Configuration Options

### Diagram Options
The `DiagramComponent` is configured with a `renderOptions` object:

- **Shapes**: Uses custom ERD shapes defined in `erd-shapes.ts`, which represent database tables with columns and data types.
- **Edges**: Configured with specific edge mappings in `edge-mappings.ts` to represent various types of database relationships (one-to-one, one-to-many, etc.) using appropriate crow's foot notation or other markers.
- **Overlays**: Uses custom overlays defined in `erd-overlays.ts` to display relationship information on the edges.

## CSS Integration
- **VisuallyJS Core**: The core styles are included in `src/index.css` via `@import "@visuallyjs/browser-ui/css/visuallyjs.css";`.
- **App Styles**: Custom styles for the ERD editor layout and table styling are imported from `erd.css`.
