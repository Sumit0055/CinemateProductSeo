import Blog from "../Components/Blog";
import SecondModel from "../Components/SecondModel";
import Service from "../Components/Service";
import Slider from "../Components/Slider";
import Testimonial from "../Components/Testimonial";
import Topmodel from "../Components/Topmodel";

export default function HomePage() {
  return (
    <>
    <Slider />
    <Topmodel />
    <SecondModel />
    <Testimonial />
    <Service />
    <Blog />
    </>
  )
}
