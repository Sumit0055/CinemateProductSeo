import Blog from "../Components/Blog";
// import Modal from "../Components/Modal";
import SecondModel from "../Components/SecondModel";
import Service from "../Components/Service";
import Slider from "../Components/Slider";
import Testimonial from "../Components/Testimonial";
import Topmodel from "../Components/Topmodel";

export default function HomePage() {
  return (
    <>
    <Slider />
    {/* <Modal/> */}
    <Topmodel />
    <SecondModel />
    <Testimonial />
    <Service />
    <Blog />
    </>
  )
}
