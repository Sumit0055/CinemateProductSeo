import React from 'react'
import Link from 'next/link'
import HeroSection from '../Components/HeroSection'
import Secondmodel from "../Components/SecondModel"

export default function ModelPage() {
  return (
    <>
    <HeroSection title="Model"/>
    <Secondmodel/>
    <div className="pagination-container">
      <ul className="pagination">
        <li><Link href="/model" className="page-link">Previous</Link></li>
        <li><Link href="/model" className="page-link active">1</Link></li>
        <li><Link href="/model" className="page-link">2</Link></li>
        <li><Link href="/model" className="page-link">3</Link></li>
        <li><Link href="/model" className="page-link">Next</Link></li>
      </ul>
    </div>
    </>
  )
}
