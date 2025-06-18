import React, { useState } from "react";
import {
  Stage,
  Layer,
  Text,
  Image as KonvaImage,
  Transformer,
} from "react-konva";
import useImage from "use-image";

import Blank from "../assets/topproducts/blank2.jpg";
import Navbar from "../components/Navbar";

const SHIRTS = {
  tshirt: Blank,
  collar: Blank,
};

const CustomizationToolPage = () => {
  const [shirtType, setShirtType] = useState<"tshirt" | "collar">("tshirt");
  const [text, setText] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState<"text" | "image" | null>(null);
  const [textProps, setTextProps] = useState({
    x: 100,
    y: 100,
    fontSize: 28,
    fill: "#F97316",
    fontStyle: "bold" as "normal" | "bold",
    draggable: true,
  });
  const [imageProps, setImageProps] = useState({
    x: 100,
    y: 200,
    width: 150,
    height: 150,
    draggable: true,
  });

  const [shirtImage] = useImage(SHIRTS[shirtType]);
  const [userImage] = useImage(uploadedImage || "");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Drag handlers
  const handleTextDragEnd = (e: any) => {
    setTextProps({ ...textProps, x: e.target.x(), y: e.target.y() });
  };
  const handleImageDragEnd = (e: any) => {
    setImageProps({ ...imageProps, x: e.target.x(), y: e.target.y() });
  };

  // Font size/color change
  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextProps({ ...textProps, fontSize: Number(e.target.value) });
  };
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextProps({ ...textProps, fill: e.target.value });
  };
  const handleFontStyleToggle = () => {
    setTextProps({
      ...textProps,
      fontStyle: textProps.fontStyle === "bold" ? "normal" : "bold",
    });
  };

  // Remove actions
  const removeText = () => setText("");
  const removeImage = () => setUploadedImage(null);

  const [textTransformer, setTextTransformer] = useState<any>(null);
  const [imageTransformer, setImageTransformer] = useState<any>(null);
  const textRef = React.useRef<any>(null);
  const imageRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (selected === "text" && textRef.current && textTransformer) {
      textTransformer.nodes([textRef.current]);
      textTransformer.getLayer().batchDraw();
    }
    if (selected === "image" && imageRef.current && imageTransformer) {
      imageTransformer.nodes([imageRef.current]);
      imageTransformer.getLayer().batchDraw();
    }
  }, [selected, textTransformer, imageTransformer]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-100 py-8 px-1 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2937] mb-2 drop-shadow-sm">
              🧵 Customize Your Shirt
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Design your own shirt with text, images, and style. Preview your
              creation live and make it truly yours!
            </p>
          </div>

          {/* Shirt Selector */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button
              onClick={() => setShirtType("tshirt")}
              className={`px-4 sm:px-6 py-2 rounded-full font-semibold shadow transition border-2 text-sm sm:text-base ${
                shirtType === "tshirt"
                  ? "bg-orange-500 text-white border-orange-500 scale-105"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-orange-100"
              }`}
            >
              T-Shirt
            </button>
            <button
              onClick={() => setShirtType("collar")}
              className={`px-4 sm:px-6 py-2 rounded-full font-semibold shadow transition border-2 text-sm sm:text-base ${
                shirtType === "collar"
                  ? "bg-orange-500 text-white border-orange-500 scale-105"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-orange-100"
              }`}
            >
              Collar Shirt
            </button>
          </div>

          {/* Design Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
            {/* Canvas Preview */}
            <div className="bg-white rounded-2xl shadow-lg p-2 sm:p-4 flex flex-col items-center border border-orange-100 w-full">
              <Stage
                width={Math.min(350, window.innerWidth - 40)}
                height={Math.min(420, window.innerWidth - 40) * 1.25}
                className="rounded-xl border-2 border-orange-200 bg-gray-50 w-full h-auto"
                style={{ maxWidth: 400, maxHeight: 500 }}
              >
                <Layer>
                  {shirtImage && (
                    <KonvaImage
                      image={shirtImage}
                      width={Math.min(350, window.innerWidth - 40)}
                      height={Math.min(420, window.innerWidth - 40) * 1.25}
                    />
                  )}
                  {/* Selectable/Draggable/Resizable/Rotatable Text */}
                  {text && (
                    <>
                      {selected === "text" && (
                        <Transformer
                          ref={(node) => setTextTransformer(node)}
                          rotateEnabled={true}
                          enabledAnchors={["middle-left", "middle-right"]}
                          boundBoxFunc={(oldBox, newBox) => {
                            if (newBox.width < 30) return oldBox;
                            return newBox;
                          }}
                        />
                      )}
                      <Text
                        {...textProps}
                        ref={textRef}
                        text={text}
                        onClick={() => setSelected("text")}
                        onTap={() => setSelected("text")}
                        onDragEnd={handleTextDragEnd}
                        draggable
                        shadowColor="#fff"
                        shadowBlur={6}
                        listening
                        style={{ cursor: "move" }}
                        onTransformEnd={() => {
                          const node = textRef.current;
                          setTextProps({
                            ...textProps,
                            x: node.x(),
                            y: node.y(),
                            fontSize: node.fontSize() * node.scaleX(),
                          });
                          node.scaleX(1);
                          node.scaleY(1);
                        }}
                      />
                    </>
                  )}
                  {/* Selectable/Draggable/Resizable/Rotatable Image */}
                  {userImage && (
                    <>
                      {selected === "image" && (
                        <Transformer
                          ref={(node) => setImageTransformer(node)}
                          rotateEnabled={true}
                          enabledAnchors={[
                            "top-left",
                            "top-right",
                            "bottom-left",
                            "bottom-right",
                          ]}
                          boundBoxFunc={(oldBox, newBox) => {
                            if (newBox.width < 30 || newBox.height < 30)
                              return oldBox;
                            return newBox;
                          }}
                        />
                      )}
                      <KonvaImage
                        {...imageProps}
                        ref={imageRef}
                        image={userImage}
                        onClick={() => setSelected("image")}
                        onTap={() => setSelected("image")}
                        onDragEnd={handleImageDragEnd}
                        draggable
                        style={{ cursor: "move" }}
                        onTransformEnd={() => {
                          const node = imageRef.current;
                          setImageProps({
                            ...imageProps,
                            x: node.x(),
                            y: node.y(),
                            width: Math.max(30, node.width() * node.scaleX()),
                            height: Math.max(30, node.height() * node.scaleY()),
                          });
                          node.scaleX(1);
                          node.scaleY(1);
                        }}
                      />
                    </>
                  )}
                </Layer>
              </Stage>
              <span className="mt-3 text-gray-400 text-xs">
                Live Preview (drag, resize, rotate)
              </span>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-5 sm:gap-6 bg-white rounded-2xl shadow-lg p-4 sm:p-8 border border-orange-100 w-full">
              {/* Text Controls */}
              <div>
                <label className="font-semibold text-gray-700">Add Text</label>
                <input
                  type="text"
                  placeholder="Enter your text"
                  className="border border-gray-300 rounded-lg px-4 py-2 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg transition"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onFocus={() => setSelected("text")}
                />
                {selected === "text" && (
                  <div className="flex gap-2 mt-2 items-center">
                    <label className="text-sm text-gray-500">Font Size</label>
                    <input
                      type="range"
                      min={16}
                      max={64}
                      value={textProps.fontSize}
                      onChange={handleFontSizeChange}
                      className="accent-orange-500"
                    />
                    <label className="text-sm text-gray-500">Color</label>
                    <input
                      type="color"
                      value={textProps.fill}
                      onChange={handleColorChange}
                      className="w-8 h-8 border-2 border-gray-200 rounded"
                    />
                    <button
                      onClick={handleFontStyleToggle}
                      className={`px-2 py-1 rounded font-bold border ${
                        textProps.fontStyle === "bold"
                          ? "bg-orange-500 text-white border-orange-500"
                          : "bg-gray-100 text-gray-700 border-gray-300"
                      }`}
                      type="button"
                    >
                      B
                    </button>
                    <button
                      onClick={removeText}
                      className="ml-2 px-2 py-1 rounded bg-red-100 text-red-600 border border-red-200 hover:bg-red-200 transition"
                      type="button"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
              {/* Image Controls */}
              <div>
                <label className="font-semibold text-gray-700">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="mt-2"
                  onChange={handleImageUpload}
                  onClick={() => setSelected("image")}
                />
                {userImage && selected === "image" && (
                  <button
                    onClick={removeImage}
                    className="ml-2 px-2 py-1 rounded bg-red-100 text-red-600 border border-red-200 hover:bg-red-200 transition"
                    type="button"
                  >
                    Remove Image
                  </button>
                )}
              </div>
              {/* Quantity */}
              <div>
                <label className="font-semibold text-gray-700">Quantity</label>
                <input
                  type="number"
                  min={1}
                  className="border border-gray-300 rounded-lg px-4 py-2 mt-2 w-full  text-black focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg transition"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>
              <button className="mt-4 bg-orange-500 text-white px-8 py-3 rounded-xl font-bold text-lg shadow hover:bg-orange-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizationToolPage;
