interface Props{
    name: string,
    value: number,
    class: string
}

const SkillComponent = (props:Props) => {
    return (
        <div className="bg-gray-300 flex relative h-[22px] text-white my-2">
            <div className="w-[70px] text-xs bg-cyan-400 h-full absolute left-0 top-0 text-center font-bold flex justify-center items-center">{props.name}</div>
            <div className={"bg-cyan-600 ".concat(props.class)}></div>
            <span className="text-sm text-cyan-800 ml-1">{props.value}%</span>
        </div>
    );
}

export default SkillComponent;