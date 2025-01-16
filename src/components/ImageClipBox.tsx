const ImageClipBox = ({
  src,
  clipClass,
}: {
  src: string;
  clipClass: string;
}) => {
  return (
    <div className={clipClass}>
      <img src={src} />
    </div>
  );
};

export default ImageClipBox;
