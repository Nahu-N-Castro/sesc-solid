import { Title, Meta, Link } from "@solidjs/meta";
import ServicePageLayout from "~/components/ServicePageLayout";
import { servicePages } from "~/utils/services-pages";

export default function ElectricidadPage() {
  const service = servicePages.electricidad;
  return (
    <>
      <Title>{service.metaTitle}</Title>
      <Meta name="description" content={service.metaDescription} />
      <Link rel="canonical" href={`https://www.sesc.com.ar/${service.slug}`} />
      <Meta property="og:title" content={service.metaTitle} />
      <Meta property="og:description" content={service.metaDescription} />
      <Meta property="og:url" content={`https://www.sesc.com.ar/${service.slug}`} />
      <ServicePageLayout service={service} />
    </>
  );
}
