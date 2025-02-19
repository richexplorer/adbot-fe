import { useState, useRef } from 'react';
import { Stage, Layer } from 'react-konva';
import { motion } from 'framer-motion';
import { FaImage, FaFont, FaShapes, FaTrash, FaCopy } from 'react-icons/fa';
import ImageElement from '../editor/ImageElement';
import TextElement from '../editor/TextElement';
import ShapeElement from '../editor/ShapeElement';

const CreateAd = () => {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const stageRef = useRef(null);

  const handleAddImage = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const element = {
        id: Date.now(),
        type: 'image',
        src: e.target.result,
        x: 100,
        y: 100,
        width: 200,
        height: 200,
      };
      setElements([...elements, element]);
    };
    reader.readAsDataURL(file);
  };

  const handleAddText = () => {
    const element = {
      id: Date.now(),
      type: 'text',
      text: 'Double click to edit',
      x: 100,
      y: 100,
      fontSize: 24,
      fill: '#000000',
      width: 200,
    };
    setElements([...elements, element]);
  };

  const handleAddShape = (shapeType) => {
    const element = {
      id: Date.now(),
      type: 'shape',
      shapeType,
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fill: '#4299e1',
    };
    setElements([...elements, element]);
  };

  const handleElementChange = (id, newProps) => {
    setElements(
      elements.map((el) => (el.id === id ? { ...el, ...newProps } : el))
    );
  };

  const handleDelete = () => {
    if (selectedId) {
      setElements(elements.filter((el) => el.id !== selectedId));
      setSelectedId(null);
    }
  };

  const handleDuplicate = () => {
    if (selectedId) {
      const elementToDuplicate = elements.find((el) => el.id === selectedId);
      if (elementToDuplicate) {
        const newElement = {
          ...elementToDuplicate,
          id: Date.now(),
          x: elementToDuplicate.x + 20,
          y: elementToDuplicate.y + 20,
        };
        setElements([...elements, newElement]);
      }
    }
  };

  return (
    <div className="flex h-[calc(100vh-2rem)]">
      {/* Toolbar */}
      <div className="w-64 bg-white shadow-lg p-4 space-y-4">
        <h2 className="text-lg font-semibold mb-4">Tools</h2>
        
        {/* Add Image */}
        <div>
          <label className="flex items-center space-x-2 p-2 hover:bg-blue-50 rounded cursor-pointer">
            <FaImage className="text-blue-600" />
            <span>Add Image</span>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => handleAddImage(e.target.files[0])}
            />
          </label>
        </div>

        {/* Add Text */}
        <button
          onClick={handleAddText}
          className="flex items-center space-x-2 p-2 w-full hover:bg-blue-50 rounded"
        >
          <FaFont className="text-blue-600" />
          <span>Add Text</span>
        </button>

        {/* Add Shapes */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 p-2">
            <FaShapes className="text-blue-600" />
            <span>Shapes</span>
          </div>
          <div className="grid grid-cols-2 gap-2 p-2">
            <button
              onClick={() => handleAddShape('rectangle')}
              className="p-2 border rounded hover:bg-blue-50"
            >
              Rectangle
            </button>
            <button
              onClick={() => handleAddShape('circle')}
              className="p-2 border rounded hover:bg-blue-50"
            >
              Circle
            </button>
          </div>
        </div>

        {/* Element Actions */}
        {selectedId && (
          <div className="space-y-2 pt-4 border-t">
            <button
              onClick={handleDelete}
              className="flex items-center space-x-2 p-2 w-full hover:bg-red-50 text-red-600 rounded"
            >
              <FaTrash />
              <span>Delete</span>
            </button>
            <button
              onClick={handleDuplicate}
              className="flex items-center space-x-2 p-2 w-full hover:bg-blue-50 rounded"
            >
              <FaCopy />
              <span>Duplicate</span>
            </button>
          </div>
        )}
      </div>

      {/* Canvas */}
      <div className="flex-1 bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Stage
            ref={stageRef}
            width={800}
            height={600}
            onClick={(e) => {
              if (e.target === e.target.getStage()) {
                setSelectedId(null);
              }
            }}
          >
            <Layer>
              {elements.map((element) => {
                if (element.type === 'image') {
                  return (
                    <ImageElement
                      key={element.id}
                      element={element}
                      isSelected={element.id === selectedId}
                      onSelect={() => setSelectedId(element.id)}
                      onChange={(newProps) =>
                        handleElementChange(element.id, newProps)
                      }
                    />
                  );
                }
                if (element.type === 'text') {
                  return (
                    <TextElement
                      key={element.id}
                      element={element}
                      isSelected={element.id === selectedId}
                      onSelect={() => setSelectedId(element.id)}
                      onChange={(newProps) =>
                        handleElementChange(element.id, newProps)
                      }
                    />
                  );
                }
                if (element.type === 'shape') {
                  return (
                    <ShapeElement
                      key={element.id}
                      element={element}
                      isSelected={element.id === selectedId}
                      onSelect={() => setSelectedId(element.id)}
                      onChange={(newProps) =>
                        handleElementChange(element.id, newProps)
                      }
                    />
                  );
                }
                return null;
              })}
            </Layer>
          </Stage>
        </div>
      </div>
    </div>
  );
};

export default CreateAd;