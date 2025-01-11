const BentoCard = ({
  src,
  title,
  description,
}: {
  src: string;
  title: React.ReactNode;
  description: string;
  isComingSoon?: boolean;
}) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        className="absolute inset-0 size-full object-cover object-center"
        loop
        muted
        autoPlay
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BentoCard;
