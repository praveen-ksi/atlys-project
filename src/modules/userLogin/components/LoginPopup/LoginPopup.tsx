import s from "./LoginPopup.module.css";

const LoginPopup:React.FunctionComponent = ()=>{
    return (
        <div className={s.root}>
            <p className={s.welcome_text}>WELCOME BACK</p>
            <p className={s.heading}>Log into your account</p>
        </div>
    )
}

export default LoginPopup;
