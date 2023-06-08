import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Cras ut malesuada magna. Maecenas nec fermentum ante. Vivamus cursus hendrerit velit, ut convallis urna placerat feugiat. Nam eu massa sed felis finibus sollicitudin. Sed quis velit libero. Sed feugiat massa ut posuere imperdiet. Duis nec viverra purus, sed aliquet nisl. Curabitur egestas risus orci, eu tincidunt ante ultricies at.</p>

        <p>Go to the <Link to="/">Homepage</Link></p>
    </div>
  )
}
