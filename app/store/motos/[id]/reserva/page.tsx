import { notFound } from "next/navigation";
import Text from "@/lib/components/text";
import Breadcrumbs from "@/lib/components/breadcrumbs";
import Separator from "@/lib/components/Separator";
import { parseMotorcycle } from "../../lib/helpers";
import { getMotorcycleById } from "../../lib/services";
import ContactForm from "../../lib/components/ContactForm";
import Carousel from "@/lib/components/carousel";
import { formatAmount } from "@/lib/utils/helpers";

const Reserve = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { variant: string };
}) => {
  const currentVariant = searchParams.variant;

  const motorcycle = await getMotorcycleById(params.id);

  if (!motorcycle) {
    notFound();
  }

  const parsedMotorcycle = parseMotorcycle(motorcycle, currentVariant);

  const { name, uuid, price, variantImages, details } = parsedMotorcycle;

  return (
    <main className="pt-8 pb-40">
      <section className="grid md:gap-10 md:justify-center md:grid-cols-2">
        <div className="w-[100vw] overflow-hidden md:w-full lg:justify-self-end lg:w-[30rem] lg:self-start">
          <Breadcrumbs
            breadcrumbs={[
              { label: "Home", href: "/" },
              {
                label: name,
                href: `/store/motos/${uuid}`,
              },
              {
                label: "Reserva",
                href: `/store/motos/${uuid}/reserva`,
                active: true,
              },
            ]}
            className="pl-4"
          />
          <Carousel images={variantImages} />

          <Text className="mt-6" type="h5">
            {name}
          </Text>
          <Text className="text-slate" type="p">
            Motor: {details.motor} <br />
            {details.potency}
          </Text>
        </div>

        <div className="flex flex-col items-center px-4 mt-12 md:items-start md:px-0 md:mt-0 md:pt-4 md:pr-4 lg:pt-5 lg:w-[28rem]">
          <Text className="md:mb-4" type="h4">
            {name}
          </Text>
          <Text className="text-slate" type="h5">
            ${formatAmount(price)}
          </Text>
          <Separator />

          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Reserve;
