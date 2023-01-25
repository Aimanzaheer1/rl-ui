import PhoneInput from 'react-phone-number-input'
import "./PhoneComponent.css"

function PhoneComponent({ placeholder, type, className, required, value, handler }) {

    return (
        <span className='myphone'>    <i class="fa-solid fa-globe global-icon"></i>
            <PhoneInput
                defaultCountry="PK"
                placeholder={placeholder}
                value={value}
                onChange={e => handler(e)}
                type={type}
                className={className + " input-fields"}
                required={required}
            />
        </span>

    )
}

export default PhoneComponent;