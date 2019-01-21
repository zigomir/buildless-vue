1. https: https://github.com/FiloSottile/mkcert

```
mkcert -install
mkcert localhost
mv localhost.pem cert.pem
mv localhost-key.pem key.pem
```

2. server: https://github.com/indexzero/http-server


```sh
http-server --ssl
```
