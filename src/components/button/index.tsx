import Link from "@docusaurus/Link";

interface ButtonProps {
  text: string;
  link: string;
}
export function Button({ text, link }: ButtonProps) {
  return (
    <Link
      to={link}
      className="bg-blue-600 text-white rounded-lg p-2 text-sm hover:text-white cursor-pointer hover:opacity-90 transition-all duration-300 hover:no-underline"
    >
      {text}
    </Link>
  );
}
