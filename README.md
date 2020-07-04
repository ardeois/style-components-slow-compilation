This repository reproduces a performance issue when using `styled-system`
and `css` function multiple times

## Steps to reproduce

```sh
yarn
yarn build
```

### Results
The file takes 19 second to compile and the generated `index.d.ts` is 1.2 MB:

```
$ ls -lah dist
total 2424
drwxr-xr-x   5 cardeois  staff   160B  3 Jul 19:48 .
drwxr-xr-x  11 cardeois  staff   352B  3 Jul 20:08 ..
-rw-r--r--   1 cardeois  staff   1.2M  3 Jul 20:12 index.d.ts
-rw-r--r--   1 cardeois  staff    10K  3 Jul 20:12 index.js
-rw-r--r--   1 cardeois  staff   7.5K  3 Jul 20:12 index.js.map
```


`tsc` diagnostics:
```
Files:                          19
Lines:                       65070
Nodes:                      164016
Identifiers:                 56707
Symbols:                     45715
Types:                       14073
Instantiations:              25812
Memory used:               143981K
Assignability cache size:     3623
Identity cache size:             0
Subtype cache size:              0
Strict subtype cache size:       0
I/O Read time:               0.02s
Parse time:                  0.55s
ResolveTypeReference time:   0.00s
ResolveModule time:          0.01s
Program time:                0.60s
Bind time:                   0.22s
Check time:                  1.24s
transformTime time:         17.16s
Source Map time:             0.01s
commentTime time:            0.09s
I/O Write time:              0.01s
printTime time:             17.65s
Emit time:                  17.65s
Total time:                 19.71s
```
