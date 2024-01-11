// goog.provide("front.app.impl.classes");

const createGutterMarker = (
  GutterMarkerParClass,
  toDOMfn
) => {
  var gutterClass = new class extends GutterMarkerParClass {};
  gutterClass.toDOM = toDOMfn;

  return gutterClass;
}

export { createGutterMarker };
