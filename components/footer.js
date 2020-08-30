export const Footer = ({ Widget }) => {
  return (
    <div className="relative h-60 pt-24 pb-16 bg-gray-950">
      <div className="container m-auto h-full">
        {Widget && <Widget />}
        <div className="mt-48 flex flex-col-reverse lg:flex-row items-center lg:justify-between font-semibold text-2xl">
          <span>Code and Design by Jeff Jadulco</span>
          <div className="flex justify-end space-x-5">
            <span>Contact</span>
            <span>Email</span>
            <span>GitHub</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
};
