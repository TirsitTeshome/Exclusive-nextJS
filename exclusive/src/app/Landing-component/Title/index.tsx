// interface TitleProps {
//     title: string;
//   }
  
//   const Title = ({ title }: TitleProps) => {
//     return <h2 className="text-3xl font-poppins w-3/4 m-auto">{title}</h2>;
//   };
  
//   export default Title;


"use client";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  // Since variant is removed, use a fixed style
  const variantClass = "text-3xl font-medium";

  return (
    <h2 className={`${variantClass} font-poppins mb-6`}>
      {title}
    </h2>
  );
};

export default Title;
