import React, { useEffect, useRef } from "react";
import { Icon } from "@mui/material";
import htmlToImage from "html-to-image";

interface CustomMuiIconProps {
  icon: React.ReactNode;
  iconSize: number[];
  onLoad: (iconUrl: string) => void;
}

const CustomMuiIcon: React.FC<CustomMuiIconProps> = ({
  icon,
  iconSize,
  onLoad,
}) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconRef.current) {
      htmlToImage
        .toPng(iconRef.current)
        .then((dataUrl) => {
          onLoad(dataUrl);
        })
        .catch((error) => {
          console.error("Error generating icon image:", error);
        });
    }
  }, []);

  return (
    <div ref={iconRef}>
      <Icon
        style={{
          fontSize: `${iconSize[0]}px`,
          width: `${iconSize[0]}px`,
          height: `${iconSize[1]}px`,
        }}
      >
        {icon}
      </Icon>
    </div>
  );
};

export default CustomMuiIcon;
