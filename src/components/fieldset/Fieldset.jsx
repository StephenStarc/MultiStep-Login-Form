import './fieldset.css'

export default function Fieldset({text,type,placeholder,must,inputOnchange}){

    return <>
<fieldset className='form-fieldset'>
    <legend className='legend-text'>{text}{must && <span className="must">*</span>}</legend>
    <input className='legend-input' type={type} placeholder={placeholder} onChange={(e)=> inputOnchange(e.target.value)}></input>
</fieldset>
    </>
}