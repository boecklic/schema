const Point = require('./Point');
const LineString = require('./LineString');
const Polygon = require('./Polygon');
const MultiPoint = require('./MultiPoint');
const MultiLineString = require('./MultiLineString');
const MultiPolygon = require('./MultiPolygon');
const GeometryCollection = require('./GeometryCollection');
const BoundingBox = require('./ref/BoundingBox');

module.exports = {
  title: 'GeoJSON Feature',
  type: 'object',
  required: ['type', 'properties', 'geometry'],
  properties: {
    type: {
      type: 'string',
      enum: ['Feature']
    },
    properties: {
      type: "object",
      title: "The Properties Schema",
      required: [
        "layerid",
        "minzoom",
        "maxzoom",
        "class"
      ],
      properties: {
        layerid: {    
          type: "string",
          title: "The Layerid Schema",
          examples: [
            "aerialway-name"
          ],
          pattern: "^(.*)$"
        },
        minzoom: {    
          type: "string",
          title: "The Minzoom Schema",
          examples: [
            "13"
          ]
        },
        maxzoom: {    
          type: "string",
          title: "The Maxzoom Schema",
          examples: [
            "17"
          ]
        },
        class: {    
          type: "string",
          title: "The Class Schema",
          examples: [
            "drag_lift"
          ],
          pattern: "^(.*)$"
        }
      }
    },
    geometry: {
      oneOf: [
        {type: 'null'},
        Point,
        LineString,
        Polygon,
        MultiPoint,
        MultiLineString,
        MultiPolygon,
        GeometryCollection
      ]
    },
    bbox: BoundingBox
  }
};
