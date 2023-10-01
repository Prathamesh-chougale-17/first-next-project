"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import React from "react";

interface CloudnaryResult {
  public_id: string;
}

const UploadFile = () => {
  const [publicId, setPublicId] = React.useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="Cannot load" />
      )}
      <CldUploadWidget
        uploadPreset="aovrh6ma"
        onUpload={(res, wid) => {
          if (res.event !== "success") return;
          const info = res.info as CloudnaryResult;
          setPublicId(info.public_id);
        }}
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
          styles: {
            palette: {
              window: "#000000",
              sourceBg: "#000000",
              windowBorder: "#8E9FBF",
              tabIcon: "#FFFFFF",
              inactiveTabIcon: "#8E9FBF",
              menuIcons: "#2AD9FF",
              link: "#08C0FF",
              action: "#336BFF",
              inProgress: "#00BFFF",
              complete: "#33ff00",
              error: "#EA2727",
              textDark: "#000000",
              textLight: "#FFFFFF",
            },
            fonts: {
              default: null,
              "'Fira Sans', sans-serif": {
                url: "https://fonts.googleapis.com/css?family=Fira+Sans",
                active: true,
              },
            },
          },
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadFile;
