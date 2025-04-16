const me = new Transport.Owner(
    "Panakshin",
    "Andrey",
    "Valerievich",
    "30.03.2006",
    Transport.DocType.passport,
    1234,
    344444
);

const myCar = new Transport.Car(
    "Chevrolet",
    "Orlando",
    2024,
    "1HGCM82633A123456",
    123456,
    me,
    Transport.BodyType.Sedan,
    Transport.CarClass.Luxury
)

myCar.print();