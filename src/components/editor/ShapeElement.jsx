import { Circle, Rect, Transformer } from 'react-konva';
import { useEffect, useRef } from 'react';

const ShapeElement = ({ element, isSelected, onSelect, onChange }) => {
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const Shape = element.shapeType === 'circle' ? Circle : Rect;
  const shapeProps = element.shapeType === 'circle' ? {
    radius: element.width / 2,
  } : {
    width: element.width,
    height: element.height,
  };

  return (
    <>
      <Shape
        ref={shapeRef}
        x={element.x}
        y={element.y}
        fill={element.fill}
        draggable
        onClick={onSelect}
        onTap={onSelect}
        {...shapeProps}
        onDragEnd={(e) => {
          onChange({
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);
          
          if (element.shapeType === 'circle') {
            const newRadius = (element.width / 2) * scaleX;
            onChange({
              x: node.x(),
              y: node.y(),
              width: newRadius * 2,
              height: newRadius * 2,
            });
          } else {
            onChange({
              x: node.x(),
              y: node.y(),
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(5, node.height() * scaleY),
            });
          }
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            const minSize = 5;
            if (newBox.width < minSize || newBox.height < minSize) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default ShapeElement;