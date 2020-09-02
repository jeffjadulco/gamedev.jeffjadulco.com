export const PreviewImage = ({ url, alt }) => {
  return (
    <div className="h-auto w-full">
      <img className="w-full object-cover" src={url} alt={alt} />
    </div>
  );
};
