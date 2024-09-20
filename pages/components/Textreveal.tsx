const TextReveal = ({children}:any) => {
//   consttext="helo h fafk wfw "
const text = "Text Reveal Animation 💫";
    return (
      <>
        <h1 className="overflow-hidden text-2xl font-bold leading-6 text-white">
          {text.match(/./g)!.map((char:any, index:any) => (
            <span
              className="animate-textreveal inline-block [animation-fill-mode:backwards]"
              key={`${char}-${index}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </>
    );
  };


  export default TextReveal;