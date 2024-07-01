import Separator from "@/lib/components/Separator";
import Text from "@/lib/components/text";
import { CheckIcon } from "@/public/assets/icons";
import Image from "next/image";
import { getAccessoryById } from "../../lib/services";
import { parseAccessory } from "../../lib/helpers";
import Link from "next/link";

export default async function Receipt({
  params,
  searchParams,
}: {
  searchParams: { cantidad: string };
  params: { id: string };
}) {
  const quantity = searchParams.cantidad;

  const accessory = await getAccessoryById(params.id);

  const { name, price, currency } = parseAccessory(accessory);

  const totalAmount = Number(quantity) * Number(price);

  return (
    <main className="p-4 md:p-0">
      <section className="flex flex-col items-center justify-center py-6">
        <Image src={CheckIcon} alt="check" />
        <Text className="mt-2" type="h4">
          ¡Hemos recibido tu solicitud!
        </Text>
        <Text className="mt-1">
          Un distribuidor te contactará con los próximos pasos respecto a tu
          reservación.
        </Text>
        <div className="border rounded-xl border-lightText p-4 md:w-[33.75rem] mt-8 flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <Text type="h4">Resumen de tu compra</Text>
            <Text type="span" className="text-primary">
              PRINT
            </Text>
          </div>
          <Separator />
          <Text className="text-start mb-4" type="h6">
            Productos
          </Text>
          <div className="flex flex-row items-center justify-between">
            <Text>
              {name} x ({quantity})
            </Text>
            <Text>{totalAmount + " " + currency}</Text>
          </div>

          <Separator />
          <Text className="text-start mb-4" type="h6">
            Detalle del pago
          </Text>
          <Text className="text-start">
            Método de pago: Tarjeta de crédito/débito
          </Text>
          <Separator />
          <div className="flex flex-row justify-between">
            <Text>Subtotal</Text>
            <Text>{totalAmount + " " + currency}</Text>
          </div>
          <div className="flex  my-2 flex-row justify-between">
            <Text>Envío</Text>
            <Text>Gratis</Text>
          </div>
          <div className="flex flex-row justify-between">
            <Text type="h6">TOTAL</Text>
            <Text type="h6">{totalAmount + " " + currency}</Text>
          </div>
          <Separator />
          <Link
            replace
            href={"/"}
            className="bg-primary text-white p-4 rounded-lg w-40 self-center"
          >
            Volver a la tienda
          </Link>
        </div>
      </section>
    </main>
  );
}
