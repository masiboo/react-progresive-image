import "./styles.css";
import ProgressiveImage from "react-progressive-graceful-image";
import image from "./images/large_.jpg";
import placeholderSrc from "./images/tiny_.jpg";

export default function App() {
  return (
    <div className="App">
      <h3>Progressive image loading</h3>
      <ProgressiveImage src={image} placeholder={placeholderSrc}>
        {(src, loading) => (
          <img
            className={`image${loading ? " loading" : " loaded"}`}
            src={src}
            alt="sea beach"
            width="700"
            height="465"
          />
        )}
      </ProgressiveImage>
      <p>content</p>
    </div>
  );
}
