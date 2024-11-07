import { runTestArray } from './run-test-array.js';

import { listWords, toCamelCase, toKebabCase, toPascalCase, toSnakeCase,
    validateCases } from '../variable-name-case-converter.js';

const invalidInputs = [
    "stop BeingADrug_addict",
    "stop_BEING_a_DRUGaddict",
    "StoP BeinG A DruG AddicT",
    "_stop_being_a_drug_addict_"];

const validInputs = {
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
    title:   'Validate Cases (validateCases)',
    fn:      validateCases,
    testArr: [
        { value: '-', result: false },
        { value: '_', result: false },
        { value: ' ', result: false },
        { value: invalidInputs[0], result: false },
        { value: invalidInputs[1], result: false },
        { value: invalidInputs[2], result: false },
        { value: invalidInputs[3], result: false },
        { value: 'a', result: true },
        { value: 'A', result: true },
        { value: validInputs.camel, result: true },
        { value: validInputs.pascal, result: true },
        { value: validInputs.kebab, result: true },
        { value: validInputs.pascalSnake, result: true },
        { value: validInputs.screamingSnake, result: true },
        { value: validInputs.snake, result: true },
        { value: validInputs.spacedLower, result: true },
        { value: validInputs.spacedUpper, result: true },
        { value: validInputs.natural, result: true }
    ]
},
{
    title:   'List Words (listWords)',
    fn:      listWords,
    testArr: [
        { value: validInputs.camel, result: expected.list },
        { value: validInputs.pascal, result: expected.list },
        { value: validInputs.kebab, result: expected.list },
        { value: validInputs.pascalSnake, result: expected.list },
        { value: validInputs.screamingSnake, result: expected.list },
        { value: validInputs.snake, result: expected.list },
        { value: validInputs.spacedLower, result: expected.list },
        { value: validInputs.spacedUpper, result: expected.list },
        { value: validInputs.natural, result: expected.list }
    ]
},
{
    title:   'To Camel Case (toCamelCase)',
    fn:      toCamelCase,
    testArr: [
        { value: validInputs.camel, result: expected.camel },
        { value: validInputs.pascal, result: expected.camel },
        { value: validInputs.kebab, result: expected.camel },
        { value: validInputs.pascalSnake, result: expected.camel },
        { value: validInputs.screamingSnake, result: expected.camel },
        { value: validInputs.snake, result: expected.camel },
        { value: validInputs.spacedLower, result: expected.camel },
        { value: validInputs.spacedUpper, result: expected.camel },
        { value: validInputs.natural, result: expected.camel }
    ]
},
{
    title:   'To Kebab Case (toKebabCase)',
    fn:      toKebabCase,
    testArr: [
        { value: validInputs.camel, result: expected.kebab },
        { value: validInputs.pascal, result: expected.kebab },
        { value: validInputs.kebab, result: expected.kebab },
        { value: validInputs.pascalSnake, result: expected.kebab },
        { value: validInputs.screamingSnake, result: expected.kebab },
        { value: validInputs.snake, result: expected.kebab },
        { value: validInputs.spacedLower, result: expected.kebab },
        { value: validInputs.spacedUpper, result: expected.kebab },
        { value: validInputs.natural, result: expected.kebab }
    ]
},
{
    title:   'To Pascal Case (toPascalCase)',
    fn:      toPascalCase,
    testArr: [
        { value: validInputs.camel, result: expected.pascal },
        { value: validInputs.pascal, result: expected.pascal },
        { value: validInputs.kebab, result: expected.pascal },
        { value: validInputs.pascalSnake, result: expected.pascal },
        { value: validInputs.screamingSnake, result: expected.pascal },
        { value: validInputs.snake, result: expected.pascal },
        { value: validInputs.spacedLower, result: expected.pascal },
        { value: validInputs.spacedUpper, result: expected.pascal },
        { value: validInputs.natural, result: expected.pascal }
    ]
},
{
    title:   'To Pascal Case (toPascalCase); mode="snake"',
    fn:      toPascalCase,
    testArr: [
        {
            value: validInputs.camel,
            args:  ["snake"],
            result: expected.pascalSnake
        },
        {
            value: validInputs.pascal,
            args:  ["snake"],
            result: expected.pascalSnake
        },
        {
            value: validInputs.kebab,
            args:  ["snake"],
            result: expected.pascalSnake
        },
        {
            value: validInputs.pascalSnake,
            args:  ["snake"],
            result: expected.pascalSnake
        },
        {
            value: validInputs.screamingSnake,
            args:  ["snake"],
            result: expected.pascalSnake
        },
        {
            value: validInputs.snake,
            args:  ["snake"],
            result: expected.pascalSnake
        },
        {
            value: validInputs.spacedLower,
            args:  ["snake"],
            result: expected.pascalSnake
        },
        {
            value: validInputs.spacedUpper,
            args:  ["snake"],
            result: expected.pascalSnake
        },
        {
            value: validInputs.natural,
            args:  ["snake"],
            result: expected.pascalSnake
        }
    ]
},
{
    title:   'To Snake Case (toSnakeCase)',
    fn:      toSnakeCase,
    testArr: [
        { value: validInputs.camel, result: expected.snake },
        { value: validInputs.pascal, result: expected.snake },
        { value: validInputs.kebab, result: expected.snake },
        { value: validInputs.pascalSnake, result: expected.snake },
        { value: validInputs.screamingSnake, result: expected.snake },
        { value: validInputs.snake, result: expected.snake },
        { value: validInputs.spacedLower, result: expected.snake },
        { value: validInputs.spacedUpper, result: expected.snake },
        { value: validInputs.natural, result: expected.snake }
    ]
},
{
    title:   'To Snake Case (toSnakeCase); mode="screaming"',
    fn:      toSnakeCase,
    testArr: [
        {
            value: validInputs.camel,
            args:  ["screaming"],
            result: expected.screamingSnake
        },
        {
            value: validInputs.pascal,
            args:  ["screaming"],
            result: expected.screamingSnake
        },
        {
            value: validInputs.kebab,
            args:  ["screaming"],
            result: expected.screamingSnake
        },
        {
            value: validInputs.pascalSnake,
            args:  ["screaming"],
            result: expected.screamingSnake
        },
        {
            value: validInputs.screamingSnake,
            args:  ["screaming"],
            result: expected.screamingSnake
        },
        {
            value: validInputs.snake,
            args:  ["screaming"],
            result: expected.screamingSnake
        },
        {
            value: validInputs.spacedLower,
            args:  ["screaming"],
            result: expected.screamingSnake
        },
        {
            value: validInputs.spacedUpper,
            args:  ["screaming"],
            result: expected.screamingSnake
        },
        {
            value: validInputs.natural,
            args:  ["screaming"],
            result: expected.screamingSnake
        }
    ]
}].forEach(e => runTestArray( e.title, e.fn, e.testArr ))
