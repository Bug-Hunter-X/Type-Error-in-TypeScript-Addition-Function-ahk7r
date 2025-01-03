# TypeScript Type Error in Addition Function

This repository demonstrates a common type error in TypeScript: attempting to add a number and a string. The function `add` is defined to accept two numbers, but the code attempts to pass a string as a parameter.

## Bug

The bug is in the `add` function call.  Because of type checking, TypeScript flags this as an error.

## Solution

The solution involves ensuring that both arguments passed to the `add` function are numbers. This can be achieved by type checking or explicit type conversion before the addition operation.