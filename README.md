# pfusch for light pride flag

1. Use the correct Node version by running `nvm use`.  
   This will install the correct version if it is not already installed,  
   which is the current latest LTS version (v18).
2. Install dependencies with `pnpm install`.  
   Use pnpm, install it with `npm i -g pnpm`.
3. Prepare the dependencies with `pnpm install`.
4. Run the project with `tsc && node .`.

---

In reality, all you need to do is send

```json
{
  "ctx": "action/ceilingscripts/activatescript",
  "data": {
    "script": "wave",
    "colourlist": [
      { "r": 357, "g": 808, "b": 980, "ww": 0, "cw": 0 },
      { "r": 0, "g": 0, "b": 0, "ww": 0, "cw": 1000 },
      { "r": 1000, "g": 78, "b": 78, "ww": 0, "cw": 0 }
    ],
    "fadeduration": 1100
  }
}
```

to `ws://licht.realraum.at/sock` and you're done.
