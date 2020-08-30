export const PreviewImage = ({ url, alt }) => {
  return (
    <div className="h-auto w-160">
      <img className="h-90 w-full object-cover" src={url} alt={alt} />
    </div>
  );
};
