const {
  pickShippingsToPacking,
} = require("../../src/shared/pickShippingsToPacking");

describe("pickShippingsToPacking", () => {
  it("should be return 2 elements that completed max weight", () => {
    const result = pickShippingsToPacking(
      [
        { location: "Miraflores", weight: 2 },
        { location: "San Martin de Pangoa", weight: 3 },
        { location: "Arequipa", weight: 4 },
        { location: "San Isidro", weight: 5 },
        { location: "Huancayo", weight: 5 },
      ],
      10
    );

    expect(result).toEqual({
      shippingsPicked: [
        { location: "Huancayo", weight: 5 },
        { location: "San Isidro", weight: 5 },
      ],
      shippingsUnpicked: [
        { location: "Arequipa", weight: 4 },
        { location: "San Martin de Pangoa", weight: 3 },
        { location: "Miraflores", weight: 2 },
      ],
    });
  });

  it("should return 4 elements that completed max weigth", () => {
    const result = pickShippingsToPacking(
      [
        { location: "Miraflores", weight: 2 },
        { location: "San Martin de Pangoa", weight: 3 },
        { location: "Arequipa", weight: 4 },
        { location: "San Isidro", weight: 5 },
        { location: "Huancayo", weight: 5 },
        { location: "Libertad", weight: 7 },
        { location: "Apurimac", weight: 2 },
      ],
      20
    );

    expect(result).toEqual({
      shippingsPicked: [
        { location: "Libertad", weight: 7 },
        { location: "Huancayo", weight: 5 },
        { location: "San Isidro", weight: 5 },
        { location: "San Martin de Pangoa", weight: 3 },
      ],
      shippingsUnpicked: [
        { location: "Arequipa", weight: 4 },
        { location: "Apurimac", weight: 2 },
        { location: "Miraflores", weight: 2 },
      ],
    });
  });

  it("should return all elements given that are less than max", () => {
    const result = pickShippingsToPacking(
      [
        { location: "Miraflores", weight: 2 },
        { location: "San Martin de Pangoa", weight: 3 },
        { location: "Arequipa", weight: 4 },
        { location: "San Isidro", weight: 5 },
        { location: "Huancayo", weight: 5 },
        { location: "Libertad", weight: 7 },
        { location: "Apurimac", weight: 2 },
      ],
      30
    );

    expect(result).toEqual({
      shippingsPicked: [
        { location: "Libertad", weight: 7 },
        { location: "Huancayo", weight: 5 },
        { location: "San Isidro", weight: 5 },
        { location: "Arequipa", weight: 4 },
        { location: "San Martin de Pangoa", weight: 3 },
        { location: "Apurimac", weight: 2 },
        { location: "Miraflores", weight: 2 },
      ],
      shippingsUnpicked: [],
    });
  });

  it("should return 2 elements given that elements in less than max", () => {
    const result = pickShippingsToPacking(
      [
        { location: "Piura", weight: 3 },
        { location: "Miraflores", weight: 3 },
        { location: "San Martin de Pangoa", weight: 5 },
        { location: "Arequipa", weight: 7 },
        { location: "San Isidro", weight: 9 },
        { location: "Huancayo", weight: 5 },
      ],
      15
    );
    expect(result).toEqual({
      shippingsPicked: [
        { location: "San Isidro", weight: 9 },
        { location: "Huancayo", weight: 5 },
      ],
      shippingsUnpicked: [
        { location: "Arequipa", weight: 7 },
        { location: "San Martin de Pangoa", weight: 5 },
        { location: "Miraflores", weight: 3 },
        { location: "Piura", weight: 3 },
      ],
    });
  });
});
