# Test deno use node http

## start
```
    // start server
    deno run  -A --unstable .\server.ts 

    // test node
    node .\client_node_run.js

    // test deno
    deno run  -A --unstable .\client_deno_run.ts
```

## Result
```
    // deno req header
    [Header-Print] Headers {
        accept: "*/*",
        "accept-encoding": "gzip, br",
        "accept-language": "*",
        "content-length": "0",
        host: "127.0.0.1:8000",
        "user-agent": "Deno/1.25.3"
    }

    // node req header
    [Header-Print] Headers {
        accept: "application/json",
        "accept-encoding": "gzip, deflate",
        connection: "keep-alive",
        "content-length": "0",
        "content-type": "multipart/form-data; boundary=--------------------------785649570449051862383470",
        host: "127.0.0.1:8000",
        "user-agent": "QiniuNodejs/7.7.0 (Windows_NT; win32; x64; )"
    }
```

## Test Version
```
    node --version
      v16.13.1
      
    deno --version
        deno 1.25.3 (release, x86_64-pc-windows-msvc)
        v8 10.6.194.5
        typescript 4.7.4
```

