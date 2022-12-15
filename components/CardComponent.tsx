interface Props{
    bgC:string,
    borderC:string,
    textC:string,
    header: React.ReactNode,
    body: React.ReactNode
}
const CardComponent = (props:Props) => {
    const {bgC,borderC,textC,header,body} = props
  return (
    <div className={"w-full h-full p-2 relative shadow-md group-hover/bg ".concat(bgC)}>
        <div className={"absolute w-3 h-2 top-0 left-0 border-t-2 border-l-2 ".concat(borderC)}></div>
        <div className={"absolute w-3 h-2 top-0 right-0 border-t-2 border-r-2 ".concat(borderC)}></div>
        <div className={"absolute w-3 h-2 bottom-0 left-0 border-b-2 border-l-2 ".concat(borderC)}></div>
        <div className={"absolute w-3 h-2 bottom-0 right-0 border-b-2 border-r-2 ".concat(borderC)}></div>
        <div className={"flex items-center font-bold border-b ".concat(borderC).concat(" ").concat(textC)}>
            {header}
        </div>
        <div className={"flex text-sm ".concat(textC)}>
            {body}
        </div>
    </div>
  );
};

export default CardComponent;
