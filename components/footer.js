import Link from "next/link";

const FooterLink = ({ children, href }) => {
  return (
    <a
      className="hover:text-teal-300"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export const Footer = ({ Widget, bShowContactButton = true }) => {
  return (
    <div className="relative h-60 pt-24 pb-16 bg-gray-950">
      <div className="container m-auto h-full">
        {Widget && <Widget />}
        <div className="mt-48 flex flex-col-reverse lg:flex-row items-center lg:justify-between font-semibold text-2xl">
          <span>
            Code and Design by{" "}
            <FooterLink href="https://jeffjadulco.com">Jeff Jadulco</FooterLink>
          </span>
          <div className="flex justify-end space-x-5">
            {bShowContactButton && (
              <Link href="/#contact" scroll={false}>
                <a className="hover:text-teal-300">Contact</a>
              </Link>
            )}
            <FooterLink href="mailto:hey@jeffjadulco.com">Email</FooterLink>
            <FooterLink href="https://github.com/jeffjadulco">
              GitHub
            </FooterLink>
            <FooterLink href="https://twitter.com/jeffjadulco">
              Twitter
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/jeffjadulco/">
              LinkedIn
            </FooterLink>
          </div>
        </div>
      </div>
    </div>
  );
};
