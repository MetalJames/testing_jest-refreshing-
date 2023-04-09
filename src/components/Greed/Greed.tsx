type GreedProps = {
    name?: string
}

const Greed = (props: GreedProps) => {

    const { name } = props;

    return (
        <>
            <div>Greed</div>
            <div>Hello {name}</div>
        </>
    )
}

export default Greed