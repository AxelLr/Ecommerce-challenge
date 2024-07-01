import Separator from "@/lib/components/Separator";
import Text from "@/lib/components/text";
import { CheckIcon } from "@/public/assets/icons";
import Image from "next/image";
import { getMotorcycleById } from "../../lib/services";
import { parseMotorcycle } from "../../lib/helpers";
import Link from "next/link";

export default async function Receipt({
  params,
  searchParams,
}: {
  searchParams: { nombre: string; tel: string; email: string; variant: string };
  params: { id: string };
}) {
  const { nombre, tel, email } = searchParams;

  const motorcycle = await getMotorcycleById(params.id);

  const { name, details } = parseMotorcycle(motorcycle, searchParams.variant);

  return (
    <main className="p-4 md:p-0">
      <section className="flex flex-col items-center justify-center py-6">
        <Image src={CheckIcon} alt="check" />
        <Text className="mt-2" type="h4">
          ¡Hemos recibido tu solicitud!
        </Text>
        <Text>
          Un distribuidor te contactará con los próximos pasos respecto a tu
          reservación.
        </Text>
        <div className="border rounded-xl border-lightText p-4 md:w-[33.75rem] mt-8 flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <Text type="h4">Resumen de tu reserva</Text>
            <Text type="span" className="text-primary">
              PRINT
            </Text>
          </div>
          <Separator />
          <Text className="text-start mb-1" type="h6">
            {name}
          </Text>
          <Text className="text-lightGray text-start" type="p">
            Motor: {details.motor} <br />
            {details.potency}
          </Text>

          <Separator />
          <Text className="text-start mb-1" type="h6">
            Información del cliente
          </Text>
          <Text className="text-start">
            {nombre} <br /> {tel} <br /> {email}
          </Text>
          <Separator />

          <Link
            replace
            href={"/"}
            className="bg-primary text-white p-4 rounded-lg w-40 self-center mt-10"
          >
            Volver a la tienda
          </Link>
        </div>
      </section>
    </main>
  );
}
