interface IButtonProps {
    title: string;
    styles: string
    clickHandler? : () => void
}

export default function AuthButton(props : IButtonProps){
    return (
        <button onClick={props.clickHandler} className={props.styles}>{props.title}</button>
    )
}