//conditional types

type IsString<T> = T extends string ? 'Yes' : 'No';

type Result1 = IsString<string>; // 'Yes'
type Result2 = IsString<number>; // 'No'
type Result3 = IsString<'Hello'>; // 'Yes'
type Result4 = IsString<42>; // 'No'

type IsNumber<T> = T extends number ? 'Yes' : 'No';

type Result5 = IsNumber<number>; // 'Yes'
type Result6 = IsNumber<string>; // 'No'
type Result7 = IsNumber<42>; // 'Yes'
type Result8 = IsNumber<'Hello'>; // 'No'

type RichPeopleVehicle={
    car: string;
    bike: string;
    cng: string;
}

type CheckVehicle<T> = T extends keyof RichPeopleVehicle ? 'Rich' : 'Not Rich';
type HasCar = CheckVehicle<'car'>; // 'Rich'
type HasBike = CheckVehicle<'bike'>; // 'Rich'
type HasCNG = CheckVehicle<'cng'>; // 'Rich'
type HasBus = CheckVehicle<'bus'>; // 'Not Rich'

type IsArray<T> = T extends any[] ? 'Yes' : 'No';

type Result9 = IsArray<number[]>; // 'Yes'
type Result10 = IsArray<string>; // 'No'
type Result11 = IsArray<{ name: string }[]>; // 'Yes'
type Result12 = IsArray<{ name: string }>; // 'No'

