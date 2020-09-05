import Link from "next/link";

const FooterLink = ({ children, href }) => {
  return (
    <a
      className="hover:text-teal-300 focus:text-teal-300 transition-colors duration-200"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export const Footer = ({ bShowContactButton = true }) => {
  return (
    <footer className="flex flex-col-reverse lg:flex-row items-center lg:justify-between font-semibold text-lg sm:text-2xl">
      <span className="mt-2 lg:mt-0">
        Code and Design by{" "}
        <FooterLink href="https://jeffjadulco.com">Jeff Jadulco</FooterLink>
      </span>
      <div className="flex justify-end space-x-5">
        {bShowContactButton && (
          <Link href="/" scroll={true}>
            <a className="hover:text-teal-300 focus:text-teal-300">Home</a>
          </Link>
        )}
        <FooterLink href="mailto:hey@jeffjadulco.com">Email</FooterLink>
        <FooterLink href="https://github.com/jeffjadulco">GitHub</FooterLink>
        <FooterLink href="https://twitter.com/jeffjadulco">Twitter</FooterLink>
        <FooterLink href="https://www.linkedin.com/in/jeffjadulco/">
          LinkedIn
        </FooterLink>
      </div>
    </footer>
  );
};
