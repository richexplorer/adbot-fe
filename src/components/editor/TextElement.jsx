import { Text, Transformer } from 'react-konva';
import { useEffect, useRef } from 'react';

const TextElement = ({ element, isSelected, onSelect, onChange }) => {
  const textRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([textRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Text
        ref={textRef}
        text={element.text}
        x={element.x}
        y={element.y}
        fontSize={element.fontSize}
        fill={element.fill}
        width={element.width}
        draggable
        onClick={onSelect}
        onTap={onSelect}
        onDblClick={() => {
          const newText = prompt('Enter new text:', element.text);
          if (newText !== null) {
            onChange({
              text: newText,
            });
          }
        }}
        onDragEnd={(e) => {
          onChange({
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          const node = textRef.current;
          const scaleX = node.scaleX();
          node.scaleX(1);
          onChange({
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            fontSize: node.fontSize() * scaleX,
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          enabledAnchors={['middle-left', 'middle-right']}
          boundBoxFunc={(oldBox, newBox) => {
            const minWidth = 5;
            if (newBox.width < minWidth) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default TextElement;