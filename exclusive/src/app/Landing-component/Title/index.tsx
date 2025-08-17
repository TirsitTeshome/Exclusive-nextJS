

"use client";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  const variantClass = "text-3xl font-medium";

  return (
    <h2 className={`${variantClass} font-poppins w-3/4 m-auto mb-6`}>
      {title}
    </h2>
  );
};

export default Title;
