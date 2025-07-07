import logoPath from "@assets/Logo Form_1751730326038.png";

interface LogoProps {
  className?: string;
  alt?: string;
}

export default function Logo({ className = "h-8 w-auto", alt = "TravelTip Logo" }: LogoProps) {
  return (
    <img 
      src={logoPath} 
      alt={alt}
      className={className}
    />
  );
}
