import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = "", onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Scroll to top if home link
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Extract the section ID from the href
      const sectionId = href.replace("/", "");
      const section = document.getElementById(sectionId);
      
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    
    if (onClick) onClick();
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};