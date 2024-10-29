import { runTestArray } from './run-test-array.js';

import { listWords, toCamelCase, toKebabCase, toPascalCase, toSnakeCase }
    from '../variable-name-case-converter.js';

const expected = {
    "list": [ "stop", "being", "a", "drug", "addict" ],
    "camel": "stopBeingADrugAddict",
    "kebab": "stop-being-a-drug-addict",
    "pascal": "StopBeingADrugAddict",
    "pascalSnake": "Stop_Being_A_Drug_Addict",
    "screamingSnake": "STOP_BEING_A_DRUG_ADDICT",
    "snake": "stop_being_a_drug_addict"};

[
    {
        title:   'List Words (listWords)',
        fn:      listWords,
        testArr: [
            {
                value: "StopBeingADrugAddict",
                result: expected.list
            },
            {
                value: "stop being a drug addict",
                result: expected.list
            },
            {
                value: "stop-being-a-drug-addict",
                result: expected.list
            },
            {
                value: "stop_being_a_drug_addict",
                result: expected.list
            },
            {
                value: "Stop_Being_A_Drug_Addict",
                result: expected.list
            },
            {
                value: "STOP BEING A DRUG ADDICT",
                result: expected.list
            },
            {
                value: "STOP_BEING_A_DRUG_ADDICT",
                result: expected.list
            },
            {
                value: "Stop being a drug addict!",
                result: expected.list
            }
        ]
    },
    {
        title:   'To Camel Case (toCamelCase)',
        fn:      toCamelCase,
        testArr: [
            {
                value: "StopBeingADrugAddict",
                result: expected.camel
            },
            {
                value: "stop being a drug addict",
                result: expected.camel
            },
            {
                value: "stop-being-a-drug-addict",
                result: expected.camel
            },
            {
                value: "stop_being_a_drug_addict",
                result: expected.camel
            },
            {
                value: "Stop_Being_A_Drug_Addict",
                result: expected.camel
            },
            {
                value: "STOP BEING A DRUG ADDICT",
                result: expected.camel
            },
            {
                value: "STOP_BEING_A_DRUG_ADDICT",
                result: expected.camel
            },
            {
                value: "Stop being a drug addict!",
                result: expected.camel
            }
        ]
    },
    {
        title:   'To Kebab Case (toKebabCase)',
        fn:      toKebabCase,
        testArr: [
            {
                value: "StopBeingADrugAddict",
                result: expected.kebab
            },
            {
                value: "stop being a drug addict",
                result: expected.kebab
            },
            {
                value: "stop-being-a-drug-addict",
                result: expected.kebab
            },
            {
                value: "stop_being_a_drug_addict",
                result: expected.kebab
            },
            {
                value: "Stop_Being_A_Drug_Addict",
                result: expected.kebab
            },
            {
                value: "STOP BEING A DRUG ADDICT",
                result: expected.kebab
            },
            {
                value: "STOP_BEING_A_DRUG_ADDICT",
                result: expected.kebab
            },
            {
                value: "Stop being a drug addict!",
                result: expected.kebab
            }
        ]
    },
    {
        title:   'To Pascal Case (toPascalCase)',
        fn:      toPascalCase,
        testArr: [
            {
                value: "StopBeingADrugAddict",
                result: expected.pascal
            },
            {
                value: "stop being a drug addict",
                result: expected.pascal
            },
            {
                value: "stop-being-a-drug-addict",
                result: expected.pascal
            },
            {
                value: "stop_being_a_drug_addict",
                result: expected.pascal
            },
            {
                value: "Stop_Being_A_Drug_Addict",
                result: expected.pascal
            },
            {
                value: "STOP BEING A DRUG ADDICT",
                result: expected.pascal
            },
            {
                value: "STOP_BEING_A_DRUG_ADDICT",
                result: expected.pascal
            },
            {
                value: "Stop being a drug addict!",
                result: expected.pascal
            }
        ]
    },
    {
        title:   'To Pascal Case (toPascalCase); mode="snake"',
        fn:      toPascalCase,
        testArr: [
            {
                value: "StopBeingADrugAddict",
                args:  ["snake"],
                result: expected.pascalSnake
            },
            {
                value: "stop being a drug addict",
                args:  ["snake"],
                result: expected.pascalSnake
            },
            {
                value: "stop-being-a-drug-addict",
                args:  ["snake"],
                result: expected.pascalSnake
            },
            {
                value: "stop_being_a_drug_addict",
                args:  ["snake"],
                result: expected.pascalSnake
            },
            {
                value: "Stop_Being_A_Drug_Addict",
                args:  ["snake"],
                result: expected.pascalSnake
            },
            {
                value: "STOP BEING A DRUG ADDICT",
                args:  ["snake"],
                result: expected.pascalSnake
            },
            {
                value: "STOP_BEING_A_DRUG_ADDICT",
                args:  ["snake"],
                result: expected.pascalSnake
            },
            {
                value: "Stop being a drug addict!",
                args:  ["snake"],
                result: expected.pascalSnake
            }
        ]
    },
    {
        title:   'To Snake Case (toSnakeCase)',
        fn:      toSnakeCase,
        testArr: [
            {
                value: "StopBeingADrugAddict",
                result: expected.snake
            },
            {
                value: "stop being a drug addict",
                result: expected.snake
            },
            {
                value: "stop-being-a-drug-addict",
                result: expected.snake
            },
            {
                value: "stop_being_a_drug_addict",
                result: expected.snake
            },
            {
                value: "Stop_Being_A_Drug_Addict",
                result: expected.snake
            },
            {
                value: "STOP BEING A DRUG ADDICT",
                result: expected.snake
            },
            {
                value: "STOP_BEING_A_DRUG_ADDICT",
                result: expected.snake
            },
            {
                value: "Stop being a drug addict!",
                result: expected.snake
            }
        ]
    },
    {
        title:   'To Snake Case (toSnakeCase); mode="screaming"',
        fn:      toSnakeCase,
        testArr: [
            {
                value: "StopBeingADrugAddict",
                args:  ["screaming"],
                result: expected.screamingSnake
            },
            {
                value: "stop being a drug addict",
                args:  ["screaming"],
                result: expected.screamingSnake
            },
            {
                value: "stop-being-a-drug-addict",
                args:  ["screaming"],
                result: expected.screamingSnake
            },
            {
                value: "stop_being_a_drug_addict",
                args:  ["screaming"],
                result: expected.screamingSnake
            },
            {
                value: "Stop_Being_A_Drug_Addict",
                args:  ["screaming"],
                result: expected.screamingSnake
            },
            {
                value: "STOP BEING A DRUG ADDICT",
                args:  ["screaming"],
                result: expected.screamingSnake
            },
            {
                value: "STOP_BEING_A_DRUG_ADDICT",
                args:  ["screaming"],
                result: expected.screamingSnake
            },
            {
                value: "Stop being a drug addict!",
                args:  ["screaming"],
                result: expected.screamingSnake
            }
        ]
    }
].forEach(e => runTestArray( e.title, e.fn, e.testArr ))
