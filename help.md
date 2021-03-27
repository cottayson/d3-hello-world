## Typescript marks or Javascript modern syntax?
<https://www.typescriptlang.org/docs/handbook/2/everyday-types.html>
```ts
function printName(obj: { first: string; last?: string }) {
  console.log(obj.last?.toUpperCase()); // checks undefined
  console.log(obj.last!.toUpperCase()); // ignore undefined branch (just disable typescript)
  /*
  console.log(obj.last?.toUpperCase())
  <=>
  if (obj.last === undefined || obj.last === null) {
    console.log(undefined);
  } else {
    console.log(obj.last.toUpperCase())
  }
  */
}

printName({ first: "hello" });
```

```ts
obj.last?.toUpperCase()
// compiles to that:
(_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()
// `void 0` <=> more short version of `undefined`
```

## Using enums
```ts
enum COMPARE {
  LT = -1,
  EQ = 0,
  GT = 1,
}

function compare(a: number, b: number) {
  return a < b ? COMPARE.LT : a === b ? COMPARE.EQ : COMPARE.GT;
}

console.log(COMPARE[compare(2, 3)]) // "LT"
```
## Cool svg graphics
<https://github.com/yoksel/wave-maker>

## Theorem in CSS
```coq
@media speech and (aspect-ratio: 11/5) { ... } => False
Proof. 
https://developer.mozilla.org/ru/docs/Web/CSS/Media_Queries/Using_media_queries
Qed.
```

## Webpack dev server error
* When user selected "Hello Typescript!" div element by mouse
```js
Uncaught TypeError: (event.target.className || "").indexOf is not a function
    at onSelection (eval at success (kernel.js:233), <anonymous>:102:52)
    at dispatch (jquery.js:5237)
    at elemData.handle (jquery.js:5044)
```