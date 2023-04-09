import { GreedProps } from "./greed.types";

const Greed = (props: GreedProps) => {

    const { name } = props;

    return (
        <>
            <div>Greed</div>
            <div>Hello {name ? name : 'Guest'}</div>
        </>
    )
}

export default Greed