import { runTestArray } from './run-test-array.js';

import { listWords, toCamelCase, toKebabCase, toPascalCase, toSnakeCase }
    from '../variable-name-case-converter.js';

const results = {
    "list": [ "stop", "being", "a", "drug", "addict" ],
    "camel": "stopBeingADrugAddict",
    "kebab": "stop-being-a-drug-addict",
    "pascal": "StopBeingADrugAddict",
    "pascalSnake": "Stop_Being_A_Drug_Addict",
    "screamingSnake": "STOP_BEING_A_DRUG_ADDICT",
    "snake": "stop_being_a_drug_addict"
};

[
    {
        title:   'List Words (listWords)',
        fn:      listWords,
        testArr: [
            {
                value: "StopBeingADrugAddict",
                result: results.list
            },
            {
                value: "stop being a drug addict",
                result: results.list
            },
            {
                value: "stop-being-a-drug-addict",
                result: results.list
            },
            {
                value: "stop_being_a_drug_addict",
                result: results.list
            },
            {
                value: "Stop_Being_A_Drug_Addict",
                result: results.list
            },
            {
                value: "STOP BEING A DRUG ADDICT",
                result: results.list
            },
            {
                value: "STOP_BEING_A_DRUG_ADDICT",
                result: results.list
            },
            {
                value: "Stop being a drug addict!",
                result: results.list
            }
        ]
    }
    ,
    {
        title:   'To Camel Case (toCamelCase)',
        fn:      toCamelCase,
        testArr: [
            {
                value: "StopBeingADrugAddict",
                result: results.camel
            },
            {
                value: "stop being a drug addict",
                result: results.camel
            },
            {
                value: "stop-being-a-drug-addict",
                result: results.camel
            },
            {
                value: "stop_being_a_drug_addict",
                result: results.camel
            },
            {
                value: "Stop_Being_A_Drug_Addict",
                result: results.camel
            },
            {
                value: "STOP BEING A DRUG ADDICT",
                result: results.camel
            },
            {
                value: "STOP_BEING_A_DRUG_ADDICT",
                result: results.camel
            },
            {
                value: "Stop being a drug addict!",
                result: results.camel
            }
        ]
    },
    {
        title:   'To Kebab Case (toKebabCase)',
        fn:      toKebabCase,
        testArr: [
            {
                value: "StopBeingADrugAddict",
                result: results.kebab
            },
            {
                value: "stop being a drug addict",
                result: results.kebab
            },
            {
                value: "stop-being-a-drug-addict",
                result: results.kebab
            },
            {
                value: "stop_being_a_drug_addict",
                result: results.kebab
            },
            {
                value: "Stop_Being_A_Drug_Addict",
                result: results.kebab
            },
            {
                value: "STOP BEING A DRUG ADDICT",
                result: results.kebab
            },
            {
                value: "STOP_BEING_A_DRUG_ADDICT",
                result: results.kebab
            },
            {
                value: "Stop being a drug addict!",
                result: results.kebab
            }
        ]
    },
    {
        title:   'To Pascal Case (toPascalCase)',
        fn:      toPascalCase,
        testArr: [
            {
                value: "StopBeingADrugAddict",
                result: results.pascal
            },
            {
                value: "stop being a drug addict",
                result: results.pascal
            },
            {
                value: "stop-being-a-drug-addict",
                result: results.pascal
            },
            {
                value: "stop_being_a_drug_addict",
                result: results.pascal
            },
            {
                value: "Stop_Being_A_Drug_Addict",
                result: results.pascal
            },
            {
                value: "STOP BEING A DRUG ADDICT",
                result: results.pascal
            },
            {
                value: "STOP_BEING_A_DRUG_ADDICT",
                result: results.pascal
            },
            {
                value: "Stop being a drug addict!",
                result: results.pascal
            }
        ]
    }
    ,
    {
        title:   'To Pascal Case (toPascalCase); snake=true',
        fn:      toPascalCase,
        testArr: [
            {
                value: "StopBeingADrugAddict",
                args:  [true],
                result: results.pascalSnake
            },
            {
                value: "stop being a drug addict",
                args:  [true],
                result: results.pascalSnake
            },
            {
                value: "stop-being-a-drug-addict",
                args:  [true],
                result: results.pascalSnake
            },
            {
                value: "stop_being_a_drug_addict",
                args:  [true],
                result: results.pascalSnake
            },
            {
                value: "Stop_Being_A_Drug_Addict",
                args:  [true],
                result: results.pascalSnake
            },
            {
                value: "STOP BEING A DRUG ADDICT",
                args:  [true],
                result: results.pascalSnake
            },
            {
                value: "STOP_BEING_A_DRUG_ADDICT",
                args:  [true],
                result: results.pascalSnake
            },
            {
                value: "Stop being a drug addict!",
                args:  [true],
                result: results.pascalSnake
            }
        ]
    },
    {
        title:   'To Snake Case (toSnakeCase)',
        fn:      toSnakeCase,
        testArr: [
            {
                value: "StopBeingADrugAddict",
                result: results.snake
            },
            {
                value: "stop being a drug addict",
                result: results.snake
            },
            {
                value: "stop-being-a-drug-addict",
                result: results.snake
            },
            {
                value: "stop_being_a_drug_addict",
                result: results.snake
            },
            {
                value: "Stop_Being_A_Drug_Addict",
                result: results.snake
            },
            {
                value: "STOP BEING A DRUG ADDICT",
                result: results.snake
            },
            {
                value: "STOP_BEING_A_DRUG_ADDICT",
                result: results.snake
            },
            {
                value: "Stop being a drug addict!",
                result: results.snake
            }
        ]
    },
    {
        title:   'To Snake Case (toSnakeCase); scream=true',
        fn:      toSnakeCase,
        testArr: [
            {
                value: "StopBeingADrugAddict",
                args:  [true],
                result: results.screamingSnake
            },
            {
                value: "stop being a drug addict",
                args:  [true],
                result: results.screamingSnake
            },
            {
                value: "stop-being-a-drug-addict",
                args:  [true],
                result: results.screamingSnake
            },
            {
                value: "stop_being_a_drug_addict",
                args:  [true],
                result: results.screamingSnake
            },
            {
                value: "Stop_Being_A_Drug_Addict",
                args:  [true],
                result: results.screamingSnake
            },
            {
                value: "STOP BEING A DRUG ADDICT",
                args:  [true],
                result: results.screamingSnake
            },
            {
                value: "STOP_BEING_A_DRUG_ADDICT",
                args:  [true],
                result: results.screamingSnake
            },
            {
                value: "Stop being a drug addict!",
                args:  [true],
                result: results.screamingSnake
            }
        ]
    }
].forEach(e => runTestArray( e.title, e.fn, e.testArr ))
