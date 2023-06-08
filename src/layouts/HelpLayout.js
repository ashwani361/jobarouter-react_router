import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
        <h2>Website Help</h2>
        <p>Phasellus maximus nunc in odio finibus, at porttitor quam placerat. Sed vel nulla metus. Sed eget gravida velit. Nunc placerat metus eget quam congue, nec volutpat elit tempor.</p>

        <nav>
            <NavLink to="faq">View the FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>

        <Outlet/>
    </div>
  )
}
