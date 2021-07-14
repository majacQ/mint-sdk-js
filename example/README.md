# Demo App

[DEMO](https://annapurna-demo.vercel.app/)

## Try it

```bash
% npm i
% npm run
```

## npm run dev:https をする方法

サブドメインを用いて、UI の出しわけを行っている。
そのため、ローカルでも`https://timocy.mintnft.mint:3000/`のような形でブラウザでアクセスできるようにする必要がある。

## `timocy.mintnft.mint:3000`でアクセスできるようにする方法

※ `fish`の人は、`zsh`などに一時的に切り替えてください。

1. `brew install mkcert`
1. `mkcert -install`
1. `mkcert *.mintnft.mint`
1. 生成された、`.pem`を、`/certs`以下に保存
1. `/etc/hosts`に`127.0.0.1 timocy.mintnft.mint`を追記

[参考](https://web.dev/how-to-use-local-https/)
