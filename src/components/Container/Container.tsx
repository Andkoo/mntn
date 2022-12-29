type TContainerProps = {
  big?: boolean;
  children: React.ReactNode;
};

const Container = ({ big, children }: TContainerProps) => (
  <div className="grid grid-cols-12 px-20 gap-x-4">
    <div className={big ? "col-span-12" : "col-span-10 col-start-2"}>
      {children}
    </div>
  </div>
);

export default Container;
