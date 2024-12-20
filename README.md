## Reproducing the issue

1. Run `npm run start:shell`
2. Run `npm run start:mfe`
3. Navigate to `http://localhost:4200`
4. You will see the Signal input is undefined.
5. If you remove the bindings, [] or {{}}, it will work.
6. It will also work the signal input with binding ONLY if it's being first loaded throught route, and then navigate and invoke throught component wrapper.
