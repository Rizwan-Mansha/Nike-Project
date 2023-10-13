
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/constants"
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard
          key={service.label}
          label={service.label}
          subText={service.subtext}
          imgURL={service.imgURL}
        />
      ))}
    </section>
  );
}

export default Services
