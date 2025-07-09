import logoPath from "@assets/Logo TravelTip XL_1751729176832.png";

interface LogoProps {
  className?: string;
  alt?: string;
}

export default function Logo({ className = "h-10 w-auto", alt = "TravelTip Logo" }: LogoProps) {
  return (
    <img 
      src={logoPath} 
      alt={alt}
      className={className}
    />
  );
}
