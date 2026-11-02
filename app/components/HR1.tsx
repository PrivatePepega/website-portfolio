type HR1Props = {
  className?: string;
};

const HR1 = ({ className = "" }: HR1Props) => {
  return (
    <div className={`flex w-full items-center justify-center ${className}`}>
      <hr className="w-[70%] rounded-[3px] border-t border-white" />
    </div>
  );
};

export default HR1;
