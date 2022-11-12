import './BreakButton.css'

const BreakButton = (props) => {
    const {breaktime, setBreak}=props
    const {time}=breaktime
    return (
            <button onClick={()=>setBreak(time)}>
                {time}
            </button>
    );
};

export default BreakButton;