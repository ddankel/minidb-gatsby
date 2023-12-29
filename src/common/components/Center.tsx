type CenterProps = {
  children: React.ReactNode;
};

const Center = ({ children }: CenterProps) => {
  return <div className="text-center">{children}</div>;
};

export default Center;
