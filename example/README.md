# Demo App

[DEMO](https://annapurna-demo.vercel.app/)

## Try it

```bash
% npm i
% npm run
```

## npm run dev:https をする方法

サブドメインを用いて開発を行う。そのため、ローカルでも`https://a.mintnft.mint:3002/`のような形でブラウザでアクセスできるようにする必要がある。

## `a.mintnft.mint:3002`でアクセスできるようにする方法

※ `fish`の人は、`zsh`などに一時的に切り替えてください。

1. `brew install mkcert`
1. `mkcert -install`
1. `mkcert *.mintnft.mint`
1. 生成された、`.pem`を、`/certs`以下に保存
1. `/etc/hosts`に`127.0.0.1 a.mintnft.mint`を追記

[参考](https://web.dev/how-to-use-local-https/)
