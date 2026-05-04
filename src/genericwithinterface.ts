interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseYear: number;
    },
    skills: T;
    bike?: X;
}

interface Skills {

    isHTML: boolean;
    isCSS: boolean;
    isJavaScript: boolean;

}

const poorDeveloper: Developer<Skills> = {
    name: 'Poor Developer ',
    salary: 20000,
    device: {
        brand: 'Dell',
        model: 'Inspiron',
        releaseYear: 2015,
    },
    skills: {
        isHTML: true,
        isCSS: true,
        isJavaScript: false,
    },
    bike: null,
}

interface RichSkills {

    isHTML: boolean;
    isCSS: boolean;
    isJavaScript: boolean;
    isTypescript: boolean;
    isNodeJS: boolean;
    isFullStack: boolean;
}

interface Bike {
    brand: string;
    model: string;
    releaseYear: number;
}

const richDeveloper: Developer<RichSkills, Bike> = {
    name: 'Rich Developer ',
    salary: 60000,
    device: {
        brand: 'Apple',
        model: 'MACBOOK PRO',
        releaseYear: 2025,
    },
    skills: {
        isHTML: true,
        isCSS: true,
        isJavaScript: false,
        isTypescript: true,
        isNodeJS: true,
        isFullStack: true,
    },
    bike: {
        brand: 'Yamaha',
        model: 'R15 V3',
        releaseYear: 2025
    }
}

console.log(poorDeveloper);
console.log(richDeveloper);