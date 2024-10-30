import { runTestArray } from './run-test-array.js';

import { listWords, toCamelCase, toKebabCase, toPascalCase, toSnakeCase }
    from '../variable-name-case-converter.js';

const inputs = {
    camel: "stopBeingADrugAddict",
    kebab: "stop-being-a-drug-addict",
    natural: "Stop being a drug addict!",
    pascal: "StopBeingADrugAddict",
    pascalSnake: "Stop_Being_A_Drug_Addict",
    screamingSnake: "STOP_BEING_A_DRUG_ADDICT",
    snake: "stop_being_a_drug_addict",
    spacedLower: "stop being a drug addict",
    spacedUpper: "STOP BEING A DRUG ADDICT"};

const expected = {
    list: [ "stop", "being", "a", "drug", "addict" ],
    camel: "stopBeingADrugAddict",
    kebab: "stop-being-a-drug-addict",
    pascal: "StopBeingADrugAddict",
    pascalSnake: "Stop_Being_A_Drug_Addict",
    screamingSnake: "STOP_BEING_A_DRUG_ADDICT",
    snake: "stop_being_a_drug_addict"};

[{
    title:   'List Words (listWords)',
    fn:      listWords,
    testArr: [
        {
            value: inputs.camel,
            result: expected.list
        },
        {
            value: inputs.pascal,
            result: expected.list
        },
        {
            value: inputs.kebab,
            result: expected.list
        },
        {
            value: inputs.pascalSnake,
            result: expected.list
        },
        {
            value: inputs.screamingSnake,
            result: expected.list
        },
        {
            value: inputs.snake,
            result: expected.list
        },
        {
            value: inputs.spacedLower,
            result: expected.list
        },
        {
            value: inputs.spacedUpper,
            result: expected.list
        },
        {
            value: inputs.natural,
            result: expected.list
        }
    ]
},
{
    title:   'To Camel Case (toCamelCase)',
    fn:      toCamelCase,
    testArr: [
        {
            value: inputs.camel,
            result: expected.camel
        },
        {
            value: inputs.pascal,
            result: expected.camel
        },
        {
            value: inputs.kebab,
            result: expected.camel
        },
        {
            value: inputs.pascalSnake,
            result: expected.camel
        },
        {
            value: inputs.screamingSnake,
            result: expected.camel
        },
        {
            value: inputs.snake,
            result: expected.camel
        },
        {
            value: inputs.spacedLower,
            result: expected.camel
        },
        {
            value: inputs.spacedUpper,
            result: expected.camel
        },
        {
            value: inputs.natural,
            result: expected.camel
        }
    ]
},
{
    title:   'To Kebab Case (toKebabCase)',
    fn:      toKebabCase,
    testArr: [
        {
            value: inputs.camel,
            result: expected.kebab
        },
        {
            value: inputs.pascal,
            result: expected.kebab
        },
        {
            value: inputs.kebab,
            result: expected.kebab
        },
        {
            value: inputs.pascalSnake,
            result: expected.kebab
        },
        {
            value: inputs.screamingSnake,
            result: expected.kebab
        },
        {
            value: inputs.snake,
            result: expected.kebab
        },
        {
            value: inputs.spacedLower,
            result: expected.kebab
        },
        {
            value: inputs.spacedUpper,
            result: expected.kebab
        },
        {
            value: inputs.natural,
            result: expected.kebab
        }
    ]
},
{
    title:   'To Pascal Case (toPascalCase)',
    fn:      toPascalCase,
    testArr: [
        {
            value: inputs.camel,
            result: expected.pascal
        },
        {
            value: inputs.pascal,
            result: expected.pascal
        },
        {
            value: inputs.kebab,
            result: expected.pascal
        },
        {
            value: inputs.pascalSnake,
            result: expected.pascal
        },
        {
            value: inputs.screamingSnake,
            result: expected.pascal
        },
        {
            value: inputs.snake,
            result: expected.pascal
        },
        {
            value: inputs.spacedLower,
            result: expected.pascal
        },
        {
            value: inputs.spacedUpper,
            result: expected.pascal
        },
        {
            value: inputs.natural,
            result: expected.pascal
        }
    ]
},
{
    title:   'To Pascal Case (toPascalCase); mode="snake"',
    fn:      toPascalCase,
    testArr: [
        {
            value: inputs.camel,
            args:  ["snake"],
            result: expected.pascalSnake
        },
        {
            value: inputs.pascal,
            args:  ["snake"],
            result: expected.pascalSnake
        },
        {
            value: inputs.kebab,
            args:  ["snake"],
            result: expected.pascalSnake
        },
        {
            value: inputs.pascalSnake,
            args:  ["snake"],
            result: expected.pascalSnake
        },
        {
            value: inputs.screamingSnake,
            args:  ["snake"],
            result: expected.pascalSnake
        },
        {
            value: inputs.snake,
            args:  ["snake"],
            result: expected.pascalSnake
        },
        {
            value: inputs.spacedLower,
            args:  ["snake"],
            result: expected.pascalSnake
        },
        {
            value: inputs.spacedUpper,
            args:  ["snake"],
            result: expected.pascalSnake
        },
        {
            value: inputs.natural,
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
            value: inputs.camel,
            result: expected.snake
        },
        {
            value: inputs.pascal,
            result: expected.snake
        },
        {
            value: inputs.kebab,
            result: expected.snake
        },
        {
            value: inputs.pascalSnake,
            result: expected.snake
        },
        {
            value: inputs.screamingSnake,
            result: expected.snake
        },
        {
            value: inputs.snake,
            result: expected.snake
        },
        {
            value: inputs.spacedLower,
            result: expected.snake
        },
        {
            value: inputs.spacedUpper,
            result: expected.snake
        },
        {
            value: inputs.natural,
            result: expected.snake
        }
    ]
},
{
    title:   'To Snake Case (toSnakeCase); mode="screaming"',
    fn:      toSnakeCase,
    testArr: [
        {
            value: inputs.camel,
            args:  ["screaming"],
            result: expected.screamingSnake
        },
        {
            value: inputs.pascal,
            args:  ["screaming"],
            result: expected.screamingSnake
        },
        {
            value: inputs.kebab,
            args:  ["screaming"],
            result: expected.screamingSnake
        },
        {
            value: inputs.pascalSnake,
            args:  ["screaming"],
            result: expected.screamingSnake
        },
        {
            value: inputs.screamingSnake,
            args:  ["screaming"],
            result: expected.screamingSnake
        },
        {
            value: inputs.snake,
            args:  ["screaming"],
            result: expected.screamingSnake
        },
        {
            value: inputs.spacedLower,
            args:  ["screaming"],
            result: expected.screamingSnake
        },
        {
            value: inputs.spacedUpper,
            args:  ["screaming"],
            result: expected.screamingSnake
        },
        {
            value: inputs.natural,
            args:  ["screaming"],
            result: expected.screamingSnake
        }
    ]
}].forEach(e => runTestArray( e.title, e.fn, e.testArr ))
