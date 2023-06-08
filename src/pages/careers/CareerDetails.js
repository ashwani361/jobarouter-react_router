import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {
    const {id} = useParams()
    const career = useLoaderData()

  return (
    <div className="career-details">
        <h2>Career Details from {career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            <p>Id veritatis sunt id consequatur delectus id dolorem necessitatibus est illum facilis non ratione eaque et alias consequuntur! Aut corporis deserunt ut iste accusantium sit consectetur cumque non aperiam omnis ut vitae voluptas rem temporibus harum.</p>
        </div>
    </div>
  )
}

// loader function
export const careerDetailsLoader = async ({params}) => {
    const {id} = params

    const res = await fetch('http://localhost:4000/careers/' + id)

    if(!res.ok){
        throw Error('Could not find that career')
    }
    
    return res.json()
}