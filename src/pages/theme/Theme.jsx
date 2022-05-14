import React, { useEffect, useState } from "react";
import styles from "./Theme.module.css";
export const Theme = () => {
  const [fontSize, setFontSize] = useState("16px");
  const [color, setColor] = useState(252);
  const [mode, setMode] = useState("bg1");
  const sizes = ["10px", "13px", "16px", "19px", "22px"];
  const colors = [252, 52, 352, 152, 202];
  const bgClasses = ["bg1", "bg2", "bg3"];
  
  useEffect(() => {
    document.querySelector("html").style.fontSize = fontSize;
  }, [fontSize]);

  useEffect(() => {
    document
      .querySelector(":root")
      .style.setProperty("--color-primary-hue", color);
  }, [color]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => changeLisghtness(), [lightNess]);

  const changeLisghtness = (mode) => {
    let darkColorLightness; // = localStorage.getItem("darkColorLightness");
    let lightColorLightness; // = localStorage.getItem("lightColorLightness");
    let whiteColorLightness; //= localStorage.getItem("whiteColorLightness");
    if (mode === "bg1") {
      darkColorLightness = "17%";
      lightColorLightness = "95%";
      whiteColorLightness = "100%";
    } else if (mode === "bg2") {
      darkColorLightness = "95%";
      lightColorLightness = "15%";
      whiteColorLightness = "20%";
    } else {
      darkColorLightness = "95%";
      lightColorLightness = "0%";
      whiteColorLightness = "10%";
    }

    const root = document.querySelector(":root");
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
  };

  return (
    <div className={styles.theme}>
      <h2>Customize your view</h2>
      <p className="text-gray">Manage your font size, color and background.</p>
      <div className={styles.fontSize}>
        <h4>Font Size</h4>
        <div className={styles.sizeContainer}>
          <h6>Aa</h6>
          <div className={`${styles.chooseFontSize} choose-size`}>
            {sizes.map((size) => {
              return (
                <span
                  onClick={() => setFontSize(size)}
                  className={`${size === fontSize ? "active" : ""}`}
                ></span>
              );
            })}
          </div>
          <h3>Aa</h3>
        </div>
      </div>

      <div className={styles.color}>
        <h4>Color</h4>
        <div className={`${styles.chooseColor} choose-color`}>
          {colors.map((col, i) => {
            let colorObj = styles[`color${i + 1}`];
            return (
              <span
                onClick={() => setColor(col)}
                className={`${colorObj} ${col === color ? "active" : ""}`}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.background}>
        <h4>Background</h4>
        <div className={`${styles.chooseBg} choose-bg`}>
          {bgClasses.map((bg, i) => {
            return (
              <div
                onClick={() => {
                  changeLisghtness(bg);
                  setMode(bg);
                }}
                className={`${styles[bg]} ${mode === bg ? "active" : ""}`}
              >
                <span className={styles.circle}></span>
                <h5>Dim</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
