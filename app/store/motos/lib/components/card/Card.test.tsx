import { render, screen } from "@testing-library/react";
import MotorcycleCard from ".";
import { Motorcycle } from "../../interfaces";

const motorcycleMock: Motorcycle = {
  name: "Meteor 350",
  seller: {
    name: "Lema Motors",
    uuid: "83f13eec-e88a-4883-a849-fb7d65031f24",
    metadata: null,
  },
  uuid: "b9055cda-bd05-4d74-aaec-bd97dffb8716",
  brand: {
    name: "Royal Enfield",
    uuid: "",
  },
  categories: [
    {
      name: "Motos",
      locale: "es",
      uuid: "3b7509f0-1c2a-42d2-b4e6-ac23cebba737",
    },
  ],
  variants: [
    {
      name: "Fireball Red",
      externalId: "LEM-0001",
      uuid: "26877386-344b-4c1f-adca-825625a31c2b",
      images: [
        {
          id: 9495,
          name: "large_fb4cce20_e049_40d3_b240_1d5cf960801d_d8d20d0cb2.webp",
          width: 472,
          height: 265,
          formats: {
            // @ts-ignore
            thumbnail: {
              url: "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_fb4cce20_e049_40d3_b240_1d5cf960801d_d8d20d0cb2.webp",
              name: "thumbnail_large_fb4cce20_e049_40d3_b240_1d5cf960801d_d8d20d0cb2.webp",
              width: 245,
              height: 138,
            },
          },
          size: 16.08,
          url: "https://bucket-rn-40-dev-test.s3.amazonaws.com/large_fb4cce20_e049_40d3_b240_1d5cf960801d_d8d20d0cb2.webp",
        },
        {
          id: 9497,
          name: "large_fb4cce20_e049_40d3_b240_1d5cf960801d_4620b6dc43.webp",
          width: 472,
          height: 265,
          formats: {
            // @ts-ignore
            thumbnail: {
              url: "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_fb4cce20_e049_40d3_b240_1d5cf960801d_4620b6dc43.webp",
              name: "thumbnail_large_fb4cce20_e049_40d3_b240_1d5cf960801d_4620b6dc43.webp",
              width: 245,
              height: 138,
            },
          },
          url: "https://bucket-rn-40-dev-test.s3.amazonaws.com/large_fb4cce20_e049_40d3_b240_1d5cf960801d_4620b6dc43.webp",
          uuid: null,
        },
        {
          id: 9498,
          name: "large_a9fd121a_6f5d_4e0c_abf6_774a29a67bf5_cbbc2e4d1b.webp",
          width: 472,
          height: 265,
          formats: {
            // @ts-ignore
            thumbnail: {
              url: "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_a9fd121a_6f5d_4e0c_abf6_774a29a67bf5_cbbc2e4d1b.webp",
              width: 245,
              height: 138,
            },
          },
          url: "https://bucket-rn-40-dev-test.s3.amazonaws.com/large_a9fd121a_6f5d_4e0c_abf6_774a29a67bf5_cbbc2e4d1b.webp",
        },
      ],
      prices: [
        {
          amount: 4799,
          currency: "USD",
          purpose: "",
          uuid: "",
        },
      ],
      // @ts-ignore
      details: {
        years: [{ value: "2022", description: null, extra: null }],
        body_types: [{ value: "Motos", description: null, extra: null }],
        features: [
          {
            value:
              "Motor bicilíndrico, 4 tiempos, refrigerado por aire, Encendido digital - TCI, 648 cc",
            description: null,
            extra: null,
          },
          {
            value: "Potencia máxima: 47 Hp @7250 RPM",
            description: null,
            extra: null,
          },
        ],
        motors: [{ value: "648cc", description: null, extra: null }],
      },
    },
  ],
};

describe("MotorcycleCard", () => {
  it("renders correctly", async () => {
    render(<MotorcycleCard motorcycle={motorcycleMock} />);

    expect(screen.getByText("Meteor 350")).toBeInTheDocument();
    expect(screen.getByText("Fireball Red")).toBeInTheDocument();
    expect(screen.getByText("Meteor 350")).toBeInTheDocument();
    expect(screen.getByText("ARS")).toBeInTheDocument();
    expect(screen.getByText("$4.799")).toBeInTheDocument();
    expect(screen.getByText("Lema Motors")).toBeInTheDocument();
  });
});
