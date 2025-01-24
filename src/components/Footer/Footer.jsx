import Logo from "../Logo/Logo"
import FooterMenu from '../FooterMenu/FooterMenu'
import Copyright from "../Copyright/Copyright"

function Footer () {
    return (
        <div className="Footer">
            <Logo/>
            <FooterMenu/>
            <Copyright/>
        </div>
    )
}
export default Footer 