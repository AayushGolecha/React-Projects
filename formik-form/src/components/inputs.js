export const Input = (props) => {
    return (
        <>
            <label htmlFor={props.id}>{props.id}:</label>
            <input id={props.id} type={props.type} name={props.name} onChange={props.formik.handleChange} onBlur={props.formik.handleBlur} value={props.value} placeholder={props.placeholder} />
            {props.touched && props.error ? <div className="error">*{props.error}</div> : null}
        </>
    )
}
export const Btn = (props) => {
    return (
        <button className={props.class} type={props.type}>{props.name}</button>
    )
}
export const Msg = (props) => {
    return (
        <div style={{ color: "red", marginBottom: "20px" }}>{props.message}</div>
    )
}