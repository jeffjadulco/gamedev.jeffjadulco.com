export const PreviewImage = ({ url, alt }) => {
  return (
    <div className="h-full w-full">
      <img className="w-full h-full object-cover" src={url} alt={alt} />
    </div>
  );
};
