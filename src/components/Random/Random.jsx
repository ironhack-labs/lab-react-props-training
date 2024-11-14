import Panel from "../ui/panel";

function Random ({min, max, className}) {

    const number = Math.floor(Math.max(min, Math.random() * max));

    return (
        <Panel className={className}>
            {`Random value between ${min} and ${max} => ${number}`}
        </Panel>
    );
}

export default Random;