type TextProps = {
  children: React.ReactNode;
};

const Text = ({ children }: TextProps) => {
  if (!children) return null;

  return <div className="post-body" dangerouslySetInnerHTML={{ __html: children as string }} />;
};

export default Text;
